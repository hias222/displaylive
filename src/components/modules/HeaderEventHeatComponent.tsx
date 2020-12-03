import React from "react";
import { eventHeat } from "../../types/EventHeat";

import classnames from 'classnames';
import { Container, Grid } from "@material-ui/core";
interface HeaderEventHeatInterface {
    EventHeat: eventHeat;
}

export class HeaderEventHeatComponent extends React.Component<HeaderEventHeatInterface, {}>{

    render() {
        let headerevent = classnames('headerevent');


        return (
            <Container >
                <Grid container>
                    <Grid item xs={4} >
                        <div className={headerevent}>
                            Wk {this.props.EventHeat.eventnr}: {this.props.EventHeat.name} Lauf: {this.props.EventHeat.heatnr}
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Container>
        )
    }

}