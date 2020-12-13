import React from "react";
import { HeaderEventHeatComponent } from "./modules/HeaderEventHeatComponent";
import { Grid } from "@material-ui/core";
import { FinishLaneComponent } from "./modules/FinishLaneComponent";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";

//import classnames from 'classnames';

export class FrontendFinishComponent extends React.Component<SimpleFrontendInterface, {}> {

    componentDidUpdate(prevProps: SimpleFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
            //console.log("update " + JSON.stringify(this.props.lanes))
        }
    }

    render() {

        //let basefill = classnames('basefill');

        //this.props.lanes.sort((a, b) => ((a.place || "99") > (b.place || "99")) ? 1 : -1)

        return (
            <div>
                <p>Finish</p>
                <HeaderEventHeatComponent
                    EventHeat={this.props.EventHeat}
                />

                <Grid container >
                    {
                        this.props.lanes.map((lane, index) => (
                            <FinishLaneComponent
                                key={index}
                                lane={lane}
                                index={index}
                            />
                        ))
                    }
                </Grid>

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