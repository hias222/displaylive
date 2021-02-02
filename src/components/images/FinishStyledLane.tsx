import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import LanePlace from "./LanePlace";
import checkName from "../../utilities/checkNames";
import LaneNameAtFinish from "./LaneNameAtFinish";
import LaneTimeAtFinish from "./LaneTimeAtFinish";
import LaneNumberAtFinish from "./LaneNumberAtFinish";
export default class FinishStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    render() {
        let correctName = checkName(35,this.props.swimmer);

        var laneTime = this.props.finishtime !== undefined ? this.props.finishtime : "-";
        var lanePlace = this.props.place !== undefined ? this.props.place : "-";

        return <Grid xs={12}>
            <LanePlace
                laneNumber={lanePlace}
            />
            <LaneNumberAtFinish
                laneNumber={this.props.lane}
            />
            <LaneNameAtFinish
                LaneName={correctName}>
            </LaneNameAtFinish>
            <LaneTimeAtFinish
                LaneTime={laneTime}
            />
        </Grid>;

    }
}
