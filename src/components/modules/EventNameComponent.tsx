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
            <Grid container item xs={12} spacing={0} >
                <Grid spacing={0} xs={1}></Grid>
                <Grid spacing={0} item xs={10} className={gridEventNameSurround}>
                    <EventName
                    EventName='Wettkampf'/>
                </Grid>
                <Grid spacing={0} xs={1}></Grid>
            </Grid>

        )
    }

}