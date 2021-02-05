import { Grid } from "@material-ui/core";
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

  getRaceData() {
    return <Grid item key={this.props.index} xs={12}>
      <LapStyledLane
        swimmer={this.props.lane.swimmer}
        lane={this.props.lane.lane}
        finishtime={this.props.lane.finishtime}
      />
    </Grid>


  }

  render() {
    return (
      this.getRaceData()
    )
  }

}