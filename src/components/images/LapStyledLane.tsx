import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import LapNumber from "./LapNumber";
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
            return <div>
                <LapNumber
                    laneNumber={this.props.lane}
                />
                <LaneTime
                    LaneTime={lapTime}
                />
            </div>
        }
    }

    render() {


        return this.checkShowLane()

    }
}

/*
                                      <LapNumber
                    LapNumber={this.props.lane}
                />
                */