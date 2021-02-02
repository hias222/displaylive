import React from "react";

import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import FinishStyledLane from "../images/FinishStyledLane";
export class FinishLaneComponent extends React.Component<LaneInterface, LaneState>{

  //paste in state

  getRaceData() {

    var place = this.props.lane.place !== '0' ? this.props.lane.place : ''
    
    return <FinishStyledLane
      swimmer={this.props.lane.swimmer}
      lane={this.props.lane.lane}
      place={place}
      finishtime={this.props.lane.finishtime}
    />
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}