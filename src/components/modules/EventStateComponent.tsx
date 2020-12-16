import { Grid } from "@material-ui/core";
import React from "react";
import { eventHeat } from "../../types/EventHeat";
import EventState from "../images/EventState";

interface EventStateInterface {
    Event: eventHeat;
    EventState: string;
}

export class EventStateComponent extends React.Component<EventStateInterface, {}>{

    render() {

        return (
                <Grid spacing={0} item xs={12}>
                    <EventState
                    EventState={"Wettkampf " + this.props.Event.eventnr + " Lauf " + this.props.Event.heatnr}
                    EventName={this.props.EventState + ": " + this.props.Event.name}/>
                </Grid>

        )
    }

}