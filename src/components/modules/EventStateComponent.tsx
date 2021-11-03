import React from "react";
import { eventHeat } from "../../types/EventHeat";
import EventState from "../images/EventState";

interface EventStateInterface {
    Event: eventHeat;
    EventState: string;
}

export class EventStateComponent extends React.Component<EventStateInterface, {}>{

    setLaneStateSubLine(){
        if (this.props.EventState === "Ziel"){
            return "Platz Bahn"
        }

        return this.props.EventState
    }

    render() {

        return (
                    <EventState
                    EventState={"Wettkampf " + this.props.Event.eventnr + " Lauf " + this.props.Event.heatnr + " " + this.props.Event.name}
                    EventName={this.setLaneStateSubLine()}/>
        )
    }

}