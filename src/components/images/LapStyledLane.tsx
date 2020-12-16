import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
import PoolIcon from '@material-ui/icons/Pool';
import LaneNumber from "./LaneNumber";
import LaneName from "./LaneName";
import LaneTime from "./LaneTime";
export default class LapStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    checkName() {
        let namelength = 20;

        let sizeName = this.props.swimmer.name.length;
        let sizeLastName = (this.props.swimmer.firstName !== undefined) ? this.props.swimmer.firstName.length : 0


        if (sizeName > (namelength - 2)) {
            console.log("short name")
            return this.props.swimmer.name.substr(0, (namelength - 2));
        }

        if (sizeName + sizeLastName > namelength) {
            return this.props.swimmer.name + " " + this.props.swimmer.firstName?.substr(0, 1) + ".";
        }

        let name = this.props.swimmer.name + " " + this.props.swimmer.firstName

        return name
    }

    render() {
        let correctName = this.checkName();
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