import React from "react";

import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import LapStyledLane from "../images/LapStyledLane";

export class LapLaneSmallComponent extends React.Component<LaneInterface, LaneState>{


  constructor(props: LaneInterface) {
    super(props);

    this.state = {
      laptime: "",
      islaptime: false,
      changed: Date.now()
    }

    this.getRaceData = this.getRaceData.bind(this)

  }

  /*
  componentDidUpdate(){
    console.log(this.props.lane.finishtime + " " + this.props.index)
  }
  */

  getRaceData() {
    return <div>
      <LapStyledLane
        swimmer={this.props.lane.swimmer}
        lane={this.props.lane.lane}
        finishtime={this.props.lane.finishtime}
      />
      </div>
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}