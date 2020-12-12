import React from "react";

import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import FinishStyledLane from "../images/FinishStyledLane";

export class FinishLaneComponent extends React.Component<LaneInterface, LaneState>{

  constructor(props: LaneInterface) {
    super(props);

    this.state = {
      laptime: "",
      islaptime: false,
      changed: Date.now()
    }

    this.getRaceData = this.getRaceData.bind(this)
  }

  //paste in state

  getRaceData() {
    if (!this.state.islaptime) {
    return <FinishStyledLane
      swimmer={this.props.lane.swimmer}
      lane={this.props.lane.lane}
      place={this.props.lane.place}
      finishtime={this.props.lane.finishtime}
    />
    } else {
      return null
    }
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}