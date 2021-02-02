import React from "react";
import { FinishLaneComponent } from "./modules/FinishLaneComponent";
import { EventNameComponent } from "./modules/EventNameComponent";
import { EventStateComponent } from "./modules/EventStateComponent";
import { FinishInterface } from "../interfaces/FinishData";
import { LaneData } from "../interfaces/lanedatainterface";
import { FinishFrontendInterface } from "../interfaces/FinishFrontendInterface";
import { idText } from "typescript";

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
            if (lane.finishtime !== 'undefined') {
                if (lane.place !== '0') {
                    if (this.finishStoredTime[index] !== lane.finishtime) {
                        var finishtime = lane.finishtime !== undefined ? lane.finishtime : ''
                        this.finishStoredTime[index] = finishtime
                        this.finishData.push(lane)
                        this.finishStoredLane[index] = true
                        this.setState(
                            {
                                lastRefresh: Date.now(),
                            }
                        )
                    }
                }
            }
            return null
        })
    }

    displayAll() {
        console.log("stopped")

        this.props.lanes.map((lane: LaneData, index) => {
            if (lane.finishtime !== 'undefined') {
                if(!this.finishStoredLane[index]) {
                    this.finishData.push(lane)
                }
            }
            return null
        })

        this.setState(
            {
                lastRefresh: Date.now(),
            }
        )

    }

    render() {

        //this.props.lanes.sort((a, b) => ((a.place || "99") > (b.place || "99")) ? 1 : -1)

        return (
            <div>
                <EventNameComponent
                    EventName='Wettkampf' />

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
            </div >
        )
    }
}


/*
<Grid container >
                    {
                        this.props.lanes.map((lane, index) => (
                            <SingleLaneStaticComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={this.props.displayMode}
                            />
                        ))
                    }
                    <Grid item xs={12}>

                            <Box
                                borderTop={1} borderLeft={0} borderBottom={0} className={staticbox}>
                                    <Grid className={staticlaneeven}>
                                    {this.props.EventHeat.competition}
                                    </Grid>

                            </Box>

                    </Grid>
                </Grid>
                */