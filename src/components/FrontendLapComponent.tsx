import React from "react";
import { LaneData } from "../interfaces/lanedatainterface";
import { LapInterface } from "../interfaces/LapData";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import { EventStateComponent } from "./modules/EventStateComponent";
import { LapLaneSmallComponent } from "./modules/LapLaneSmallComponent";


export class FrontendLapComponent extends React.Component<SimpleFrontendInterface, LapInterface> {

    lapData: LaneData[];
    lapStoredTime: string[];
    laneRefresh: number[];
    emptylane: LaneData;

    constructor(props: SimpleFrontendInterface) {
        super(props);

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

    componentDidUpdate(prevProps: SimpleFrontendInterface) {
        // store new data
        this.props.lanes.map((lane, index) => {
            if (lane.finishtime !== 'undefined') {
                if (this.lapStoredTime[index] !== lane.finishtime) {
                    console.log(lane.lane + ' ' + lane.finishtime)
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

        
        // in ticker 
        // todo

        this.state.LaneRefresh.map((refresh, index) => {
            var diff = Date.now() - refresh;
            if (diff > 15000) {
                this.lapData.shift()
                this.laneRefresh.shift()
            }

        })

        

    }

    render() {
        //this.state.lanes.sort((a, b) => ((a.finishtime || "0") > (b.finishtime || "0")) ? 1 : -1)
        return (
            <div>
                <EventStateComponent
                    Event={this.props.EventHeat}
                    EventState="Zwischenzeit"
                />
                {
                    this.state.lanes.map((lane, index) => (
                        <LapLaneSmallComponent
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