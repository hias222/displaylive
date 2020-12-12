import React from "react";
import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import StartStyledLane from "../images/StartStyledLane";

export class StartLaneComponent extends React.Component<LaneInterface, LaneState>{

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
    return <StartStyledLane
      swimmer={this.props.lane.swimmer}
      lane={this.props.lane.lane}
    />
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}