import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import LaneNumber from "./LaneNumber";
import LaneName from "./LaneName";
import checkName from "../../utilities/checkNames";
export default class StartStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    render() {
        let correctName = checkName(20,this.props.swimmer)

        return <Grid item xs={12} >
            <LaneNumber
                laneNumber={this.props.lane}
            />
            <LaneName
                LaneName={correctName}>
            </LaneName>
            <LaneName
                LaneName={this.props.swimmer.clubname}>
            </LaneName>
        </Grid>
    }
}
