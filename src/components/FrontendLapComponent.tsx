import { timeStamp } from "console";
import React from "react";
import { LaneData } from "../interfaces/lanedatainterface";
import { LapInterface } from "../interfaces/LapData";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import { EventStateComponent } from "./modules/EventStateComponent";
import { LapLaneSmallComponent } from "./modules/LapLaneSmallComponent";


export class FrontendLapComponent extends React.Component<SimpleFrontendInterface, LapInterface> {

    lapData: LaneData[];
    lapStatus: boolean[];

    constructor(props: SimpleFrontendInterface) {
        super(props);

        this.state = {
            lanes: [],
            lapStatus: [],
            lastRefresh: Date.now()
        }

        this.lapData = []
        this.lapStatus = []
    }

    componentDidMount() {
        // frist fill
        this.props.lanes.map((lane, index) => {
            this.lapData.push(lane)
            this.lapStatus.push(false)
            this.setState(
                {
                    lanes: this.lapData,
                    lapStatus: this.lapStatus,
                }
            )
            return null
        })


    }

    componentDidUpdate(prevProps: SimpleFrontendInterface) {

        console.log("update BaseFrontendStaticComponent lanes ")

        this.props.lanes.map((lane, index) => {
            if (!this.lapStatus[index]) {
                if (lane.finishtime !== 'undefined') {
                    console.log(lane.lane + ' ' + lane.finishtime)
                    this.lapData.push(lane)
                    this.lapData.shift()
                    this.lapStatus[index] = true
                    this.setState(
                        {
                            lastRefresh: Date.now(),
                        }
                    )
                }
            }
            return null
        })
        //if (prevProps.lanes !== this.props.lanes) {
        //    console.log("update BaseFrontendStaticComponent lanes ")

            //console.log("update " + JSON.stringify(this.props.lanes))
        //}
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