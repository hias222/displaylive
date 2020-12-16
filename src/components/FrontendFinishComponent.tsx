import React from "react";
import { FinishLaneComponent } from "./modules/FinishLaneComponent";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import { EventNameComponent } from "./modules/EventNameComponent";
import { EventStateComponent } from "./modules/EventStateComponent";

export class FrontendFinishComponent extends React.Component<SimpleFrontendInterface, {}> {

    componentDidUpdate(prevProps: SimpleFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
            //console.log("update " + JSON.stringify(this.props.lanes))
        }
    }

    render() {

        //this.props.lanes.sort((a, b) => ((a.place || "99") > (b.place || "99")) ? 1 : -1)

        return (
            <div>
                <EventNameComponent
                EventName='Wettkampf'/>

                <EventStateComponent
                Event={this.props.EventHeat}
                EventState='Ziel'
                />

                {
                    this.props.lanes.map((lane, index) => (
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