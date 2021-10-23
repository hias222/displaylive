import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import LaneName from "./LaneName";
import getSwimmerLongName from "../../utilities/getSwimmerLongName";
import StartNumber from "./StartNumber";
export default class StartStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    render() {
        let correctName = getSwimmerLongName(58,this.props.swimmer)

        return <div>
            <StartNumber
                laneNumber={this.props.lane}
                laneStartPoint={250}
            />
            <LaneName
                LaneName={correctName}
                laneStartPoint={250}>
            </LaneName>
        </div>
    }
}
