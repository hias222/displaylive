import { Box, Grid } from "@material-ui/core";
import React from "react";
import { LaneData } from "../interfaces/lanedatainterface";
import { LapInterface } from "../interfaces/LapData";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import BoxEmpty from "./images/BoxEmpty";
import { LapLaneSmallComponent } from "./modules/LapLaneSmallComponent";
import { StartStopComponent } from "./modules/StartStopComponent";


export class FrontendRunningComponent extends React.Component<SimpleFrontendInterface, LapInterface> {

    lapData: LaneData[];
    lapStoredTime: string[];
    laneRefresh: number[];
    emptylane: LaneData;

    intervalId: NodeJS.Timeout;

    constructor(props: SimpleFrontendInterface) {
        super(props);

        console.log('init')

        this.state = {
            lanes: [],
            lapStoredTime: [],
            lastRefresh: Date.now(),
            LaneRefresh: []
        }

        this.lapData = []
        this.lapStoredTime = []
        this.laneRefresh = []
        this.emptylane = {
            lane: '0',
            finishtime: 'undefined',
            swimmer: {
                clubid: '',
                clubname: '',
                name: ''
            }

        }
        this.laptimer = this.laptimer.bind(this)
        this.intervalId = setInterval(this.laptimer, 1000);
    }

    componentDidMount() {
        // frist fill
        this.props.lanes.map((lane, index) => {
            this.lapStoredTime.push('')
            this.setState(
                {
                    lanes: this.lapData,
                    lapStoredTime: this.lapStoredTime,
                    LaneRefresh: this.laneRefresh
                }
            )
            return null
        })
    }

    componentWillUnmount() {
        console.log('going sleep lap')
        clearInterval(this.intervalId);
    }

    componentDidUpdate(prevProps: SimpleFrontendInterface) {
        // store new data
        this.props.lanes.map((lane, index) => {
            if (lane.finishtime !== 'undefined') {
                if (this.lapStoredTime[index] !== lane.finishtime) {
                    this.lapData.push(lane)
                    this.laneRefresh.push(Date.now())
                    var finishtime = lane.finishtime !== undefined ? lane.finishtime : ''
                    this.lapStoredTime[index] = finishtime
                    this.setState(
                        {
                            lastRefresh: Date.now(),
                        }
                    )
                }
            }
            return null
        })

    }

    laptimer() {
        this.state.LaneRefresh.map((refresh, index) => {
            var diff = Date.now() - refresh;
            if (diff > 15000) {
                this.lapData.shift()
                this.laneRefresh.shift()
            }
            return null;
        })
        this.setState(
            {
                lastRefresh: Date.now(),
            }
        )
    }


    render() {
        //this.state.lanes.sort((a, b) => ((a.finishtime || "0") > (b.finishtime || "0")) ? 1 : -1)
        return (
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <BoxEmpty></BoxEmpty>
                        {
                            this.state.lanes.map((lane, index) => (
                                <div>
                                    <LapLaneSmallComponent
                                        key={index}
                                        lane={lane}
                                        index={index} />
                                </div>
                            ))
                        }
                    </Grid>

                    <Grid item xs={6}>
                        <Box m={55} />
                        <StartStopComponent
                            startdelayms={this.props.startdelayms}
                            EventHeat={this.props.EventHeat}
                            runningTime={this.props.runningTime}
                        />
                    </Grid>
                </Grid>
            </div >
        )
    }
}
