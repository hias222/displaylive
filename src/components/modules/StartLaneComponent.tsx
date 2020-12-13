import React from "react";
import { LaneInterface } from "../../interfaces/LaneInterface";

import StartStyledLane from "../images/StartStyledLane";

export class StartLaneComponent extends React.Component<LaneInterface, {}>{

  constructor(props: LaneInterface) {
    super(props);

    this.getRaceData = this.getRaceData.bind(this)
  }

  //paste in state

  getRaceData() {
    //console.log("swimmer " + this.props.lane.swimmer.name)
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