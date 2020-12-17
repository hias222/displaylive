import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import PoolIcon from '@material-ui/icons/Pool';
import LaneNumber from "./LaneNumber";
import LaneName from "./LaneName";
import LaneTime from "./LaneTime";
import checkName from "../../utilities/checkNames";
export default class LapStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

       render() {
        let correctName = checkName(20,this.props.swimmer);
        var laneTime = this.props.finishtime !== undefined ? this.props.finishtime : "-";

        return <Grid item xs={12}>
            <LaneNumber
                laneNumber={this.props.lane}
            />
            <PoolIcon></PoolIcon>
            <LaneName
                LaneName={correctName}>
            </LaneName>
            <LaneTime
                LaneTime={laneTime}
            />
        </Grid>;

    }
}

/*
                                      <LaneNumber
                    laneNumber={this.props.lane}
                />
                */