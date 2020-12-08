import React from "react";

import { swimmerData } from "../../types/SwimmerData";
import { LaneInterface } from "../../interfaces/LaneInterface";
import { LaneState } from "../../state/LaneState";

import checkUndefined from "../../utilities/checkUndefined";
import getBirthYear from "../../utilities/getBirthYear";
import stringToBoolean from "../../utilities/stringToBoolean";
import StartStyledLane from "../images/StartStyledLane";

export class StartLaneComponent extends React.Component<LaneInterface, LaneState>{

  swimmer: swimmerData;

  constructor(props: LaneInterface) {
    super(props);

    this.swimmer = {
      name: "nn",
      clubid: "0",
      birthyear: "1900",
      clubname: "nn"
    }

    this.state = {
      lane: "",
      place: "",
      time: "",
      laptime: "",
      islaptime: false,
      changed: Date.now(),
      swimmerData: this.swimmer
    }

    this.updateData = this.updateData.bind(this)
    this.getRaceData = this.getRaceData.bind(this)
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps: LaneInterface) {
    //console.log("update " + this.props.lane.lane)
    if (prevProps.lane !== this.props.lane) {
      //console.log("diff update " + this.props.displayMode + " " + JSON.stringify(this.props.lane))
      this.updateData()
    }
  }


  updateData() {
    if (this.props.lane.lastname !== undefined) {
      this.setState({
        swimmerData: {
          birthyear: getBirthYear(this.props.lane.birthdate),
          name: this.props.lane.lastname,
          firstName: this.props.lane.firstname,
          clubid: this.props.lane.code,
          clubname: this.props.lane.name,
        },
        lane: this.props.lane.lane,
        changed: Date.now(),
      })
    } else {
      this.setState({
        swimmerData: {
          birthyear: " ",
          name: " ",
          firstName: " ",
          clubid: "-",
          clubname: ""
        },
        lane: this.props.lane.lane,
        changed: Date.now(),
      })
    }

    if (this.props.lane.entrytime !== undefined) {
      this.setState({
        entrytime: this.props.lane.entrytime
      })
    }

    if (stringToBoolean(this.props.lane.lap)) {
      this.setState({
        islaptime: true,
        laptime: "",
      })
    } else {
      this.setState({
        islaptime: false,
        place: checkUndefined(this.props.lane.place),
        time: checkUndefined(this.props.lane.finishtime),
      })
    }

  }
  //paste in state

  getRaceData() {
    return <StartStyledLane
      swimmer={this.state.swimmerData}
      lane={this.state.lane}
    />
  }

  render() {
    return (
      this.getRaceData()
    )
  }

}