import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import LaneNumber from "./LaneNumber";
import LaneName from "./LaneName";
import LaneTime from "./LaneTime";
import LanePlace from "./LanePlace";
import checkName from "../../utilities/checkNames";
export default class FinishStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    render() {
        let correctName = checkName(20,this.props.swimmer);

        var laneTime = this.props.finishtime !== undefined ? this.props.finishtime : "-";
        var lanePlace = this.props.place !== undefined ? this.props.place : "-";

        return <Grid xs={12}>
            <LanePlace
                laneNumber={lanePlace}
            />
            <LaneNumber
                laneNumber={this.props.lane}
            />
            <LaneName
                LaneName={correctName}>
            </LaneName>
            <LaneTime
                LaneTime={laneTime}
            />
        </Grid>;

    }
}
