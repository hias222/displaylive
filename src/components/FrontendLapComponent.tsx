import React from "react";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import { EventStateComponent } from "./modules/EventStateComponent";
import { LapLaneSmallComponent } from "./modules/LapLaneSmallComponent";


export class FrontendLapComponent extends React.Component<SimpleFrontendInterface, {}> {

    componentDidUpdate(prevProps: SimpleFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
            //console.log("update " + JSON.stringify(this.props.lanes))
        }
    }

    render() {
        //  this.props.lanes.sort((a, b) => ((a.finishtime || "0") > (b.finishtime || "0")) ? 1 : -1)
        return (
            <div>
                <EventStateComponent
                    Event={this.props.EventHeat}
                    EventState="Zwischenzeit"
                />
                {
                    this.props.lanes.map((lane, index) => (
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