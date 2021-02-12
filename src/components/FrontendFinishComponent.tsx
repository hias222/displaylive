import React from "react";
import { FinishLaneComponent } from "./modules/FinishLaneComponent";
import { EventNameComponent } from "./modules/EventNameComponent";
import { EventStateComponent } from "./modules/EventStateComponent";
import { FinishInterface } from "../interfaces/FinishData";
import { LaneData } from "../interfaces/lanedatainterface";
import { FinishFrontendInterface } from "../interfaces/FinishFrontendInterface";
import { Grid } from "@material-ui/core";
import BoxEmpty from "./images/BoxEmpty";

export class FrontendFinishComponent extends React.Component<FinishFrontendInterface, FinishInterface> {

    finishData: LaneData[];
    finishStoredTime: string[];
    finishStoredLane: boolean[];

    constructor(props: FinishFrontendInterface) {
        super(props);

        this.state = {
            lanes: [],
            finishStoredTime: [],
            lastRefresh: Date.now(),
            finishStoredLane: []
        }
        this.finishData = []
        this.finishStoredTime = []
        this.finishStoredLane = []
        this.addLaneToDisplay = this.addLaneToDisplay.bind(this)
        this.displayAll = this.displayAll.bind(this)
        this.sortLanesToPlace = this.sortLanesToPlace.bind(this)

    }

    componentDidMount() {
        this.props.lanes.map((lane, index) => {
            this.finishStoredLane.push(false)
            this.setState(
                {
                    lanes: this.finishData,
                    finishStoredTime: this.finishStoredTime,
                    finishStoredLane: this.finishStoredLane
                }
            )
            return null
        })
    }

    componentDidUpdate(prevProps: FinishFrontendInterface) {

        if (prevProps.active !== this.props.active) {
            if (!this.props.active) {
                this.displayAll();
            }
        }

        this.props.lanes.map((lane: LaneData, index) => {
            this.addLaneToDisplay(lane, index)
                .then((changed) => {
                    if (changed) {
                        this.sortLanesToPlace().then(() =>
                            this.setState(
                                {
                                    lastRefresh: Date.now(),
                                })
                        )
                    }
                })
                .catch((err) => console.log('uups ' + err))
            return null
        })
    }

    displayAll() {
        console.log("stopped")

        this.sortLanesToPlace()
            .then(() => {
                Promise.all(
                    this.props.lanes.map((lane: LaneData, index) => {
                        if (lane.finishtime !== 'undefined') {
                            if (!this.finishStoredLane[index]) {
                                this.finishData.push(lane)
                            }
                        }
                        return null
                    }))
            }).then(() => {
                console.log('finished sort and empty lanes')
                this.setState(
                    {
                        lastRefresh: Date.now(),
                    })
            })
            .catch((err) => console.log('Uuups' + err))


        this.setState(
            {
                lastRefresh: Date.now(),
            }
        )

    }

    addLaneToDisplay(lane: LaneData, index: number): Promise<boolean> {
        return new Promise((resolve) => {
            var changed = false
            if (lane.finishtime !== 'undefined') {
                if (lane.place !== '0') {
                    if (this.finishStoredTime[index] !== lane.finishtime) {
                        var finishtime = lane.finishtime !== undefined ? lane.finishtime : ''
                        this.finishStoredTime[index] = finishtime
                        this.finishData.push(lane)
                        this.finishStoredLane[index] = true
                        changed = true

                    }
                }
            }
            resolve(changed)
        })
    }

    sortLanesToPlace(): Promise<string> {
        return new Promise((resolve, reject) => {
            Promise.all(
                this.finishData.sort((a, b) => ((a.place || "99") > (b.place || "99")) ? 1 : -1)
            ).then(() =>
                resolve('finished')
            ).catch((err) => reject())
        });
    }

    iReturnPromiseAfter1Second(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Hello world!"), 1000);
        });
    }


    render() {

        //this.props.lanes.sort((a, b) => ((a.place || "99") > (b.place || "99")) ? 1 : -1)

        return (
            <Grid container>
                <Grid item xs={12}><BoxEmpty></BoxEmpty></Grid>
                <Grid item xs={12}><BoxEmpty></BoxEmpty></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container>
                        <EventNameComponent
                             EventName={this.props.EventHeat.competition !== undefined ? this.props.EventHeat.competition : 'undefinend'} />
                
                        <EventStateComponent
                            Event={this.props.EventHeat}
                            EventState='Ziel'
                        />

                        {
                            this.state.lanes.map((lane, index) => (
                                <FinishLaneComponent
                                    key={index}
                                    lane={lane}
                                    index={index}
                                />
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        )
    }
}
