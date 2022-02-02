import { Box } from "@material-ui/core";
import classnames from "classnames";
import { timeStamp } from "console";
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
        this.setState(
            {
                lanes: [],
                lapStoredTime: [],
                lastRefresh: Date.now(),
                LaneRefresh: []
            }
        )
        this.lapData = []
        this.laneRefresh = []
        clearInterval(this.intervalId);
    }

    componentDidUpdate(prevProps: SimpleFrontendInterface) {
        // store new data
        var numberlanes = this.props.lanes.length;
        this.props.lanes.map((lane, index) => {
            if (lane.finishtime !== 'undefined') {
                if (this.lapStoredTime[index] !== lane.finishtime) {
                    if (this.lapData.length >= numberlanes) {
                        this.lapData.shift()
                    }
                    this.lapData.push(lane)
                    if (this.laneRefresh.length >= numberlanes) {
                        this.laneRefresh.shift()
                    }
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
            //console.log("shift " + index)
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
        // noSpaceContainerHorizontal
        let noSpaceContainerHorizontal = classnames('noSpaceContainerHorizontal');
        return (
            <div className={noSpaceContainerHorizontal}>
                <Box>
                    <BoxEmpty boxSizeHeight={20} />
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
                </Box>
                <StartStopComponent
                    startdelayms={this.props.startdelayms}
                    EventHeat={this.props.EventHeat}
                    runningTime={this.props.runningTime}
                    spaceFromTop={650}
                />
            </div >
        )
    }
}
