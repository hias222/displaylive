import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import LaneNumber from "./LaneNumber";
import LaneTime from "./LaneTime";
export default class LapStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    checkShowLane() {

        //console.log(this.props)
        var lapTime = this.props.finishtime !== undefined ? this.props.finishtime : "-";

        if (this.props.finishtime === 'undefined') {
            //console.log(this.props.lane + ' empty')
            return null;
        } else {
            return <Grid item xs={12}>
                <LaneNumber
                    laneNumber={this.props.lane}
                />
                <LaneTime
                    LaneTime={lapTime}
                />
            </Grid>;
        }
    }

    render() {


        return this.checkShowLane()

    }
}

/*
                                      <LaneNumber
                    laneNumber={this.props.lane}
                />
                */