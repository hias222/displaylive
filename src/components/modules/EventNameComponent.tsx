import { Grid } from "@material-ui/core";
import classnames from 'classnames';
import React from "react";
import EventName from "../images/EventName";

interface EventNameInterface {
    EventName: string;
}

export class EventNameComponent extends React.Component<EventNameInterface, {}>{

    render() {

        //eventName
        let gridEventNameSurround = classnames('gridEventNameSurround');
        return (
                <Grid spacing={0} item xs={12} className={gridEventNameSurround}>
                    <EventName
                    EventName='Wettkampf'/>
                </Grid>
        )
    }

}