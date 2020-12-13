import React from "react";
import { eventHeat } from "../../types/EventHeat";

import { Grid } from "@material-ui/core";
import LaneName from "../images/LaneName";
interface HeaderEventHeatInterface {
    EventHeat: eventHeat;
}

export class HeaderEventHeatComponent extends React.Component<HeaderEventHeatInterface, {}>{

    render() {

        return (
            <Grid container item xs={12} spacing={0}>
                <Grid xs={1}></Grid>

                <Grid item xs={10} >
                    <LaneName
                        LaneName={"Wk " + this.props.EventHeat.eventnr + ":" + this.props.EventHeat.name + "Lauf: " + this.props.EventHeat.heatnr}>
                    </LaneName>
                </Grid>
                <Grid xs={1}></Grid>
            </Grid>

        )
    }

}