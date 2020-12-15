import { Grid } from "@material-ui/core";
import React from "react";
import EventState from "../images/EventState";

interface EventStateInterface {
    EventState: string;
}

export class EventStateComponent extends React.Component<EventStateInterface, {}>{

    render() {

        return (
            <Grid container item xs={12} spacing={0}>
                <Grid spacing={0} xs={1}></Grid>
                <Grid spacing={0} item xs={10} >
                    <EventState
                    EventState={this.props.EventState}/>
                </Grid>
                <Grid spacing={0} xs={1}></Grid>
            </Grid>

        )
    }

}