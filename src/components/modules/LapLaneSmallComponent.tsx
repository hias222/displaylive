import React from "react";

import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import LapStyledLane from "../images/LapStyledLane";

export class LapLaneSmallComponent extends React.Component<LaneInterface, LaneState>{

  intervalId: NodeJS.Timeout;

  constructor(props: LaneInterface) {
    super(props);

    this.state = {
      laptime: "",
      islaptime: false,
      changed: Date.now()
    }

    this.getRaceData = this.getRaceData.bind(this)
    this.laptimer = this.laptimer.bind(this)
    this.intervalId = setInterval(this.laptimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  laptimer() {
    if (this.state.islaptime) {
      var changesinceseconds = Date.now() - this.state.changed
      if (changesinceseconds > 15000) {
        console.log("lap " + this.props.lane.lane + " changed since " + changesinceseconds)
        this.setState({
          laptime: "",
          islaptime: false
        })
      }
    }
  }

  getRaceData() {
    return <LapStyledLane
      swimmer={this.props.lane.swimmer}
      lane={this.props.lane.lane}
      finishtime={this.props.lane.finishtime}
    ></LapStyledLane>
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}