import { Grid } from "@material-ui/core";
import React from "react";
import EventName from "../images/EventName";

interface EventNameInterface {
    EventName: string;
}

export class EventNameComponent extends React.Component<EventNameInterface, {}>{

    render() {

        //eventName
        //let gridEventNameSurround = classnames('gridEventNameSurround');
        //className={gridEventNameSurround}
        return (
            <div > 
                <Grid item xs={12}>
                    <EventName
                        EventName={this.props.EventName} />
                </Grid>
            </div>
        )
    }

}