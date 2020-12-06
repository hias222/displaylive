import React from "react";

import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { LaneData } from "../interfaces/lanedatainterface";
import { EnumHeatState, SwitchState } from "../state/SwitchState";
import stringToBoolean from "../utilities/stringToBoolean";
import { FrontendFinishComponent } from "./FrontendFinishComponent";
import { FrontendHeaderTimeComponent } from "./FrontendHeaderTimeComponent";
import { FrontendLapComponent } from "./FrontendLapComponent";
import { FrontendStartComponent } from "./FrontendStartComponent copy";

//import classnames from 'classnames';

export class FrontendSwitchComponent extends React.Component<BaseFrontendInterface, SwitchState> {

    constructor(props: BaseFrontendInterface) {
        super(props);

        this.state = {
            runnning: false,
            lapdata: false,
            finishdata: false,
            state: EnumHeatState.BeforeStart,
            lanes: []
        }
    }

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (this.state.runnning) {
            // nein geht nicht 
            if (!this.state.finishdata) {
                this.checkResults(this.props.lanes)
            }
        }

        if (prevProps.startdelayms !== this.props.startdelayms) {
            this.checkRunning();
        }

        if (prevProps.EventHeat.heatnr !== this.props.EventHeat.heatnr) {
            this.setState({
                state: EnumHeatState.BeforeStart,
                finishdata: false,
                lapdata: false
            })

        }

        if (prevProps.EventHeat.eventnr !== this.props.EventHeat.eventnr) {
            this.setState({
                state: EnumHeatState.BeforeStart,
                finishdata: false,
                lapdata: false
            })
        }

    }

    checkRunning() {
        if (this.props.startdelayms === -1) {
            this.setState({
                runnning: false
            })
        } else {
            this.setState({
                runnning: true
            })
        }
    }

    checkResults(lanes: LaneData[]) {

        if (lanes !== undefined) {
            this.props.lanes.map((lane, index) => {
                if (lane !== this.state.lanes[index]) {
                    var sizeLanes = this.state.lanes.length
                    if (index > sizeLanes - 1) {
                        this.setState(state => {
                            const lanes = [...state.lanes, lane];
                            return {
                                lanes
                            };
                        });
                    } else {
                        if (stringToBoolean(lane.lap)) {
                            this.setState({
                                lapdata: true
                            })
                        } else {
                            this.setState({
                                finishdata: true
                            })
                        }

                        // eslint-disable-next-line
                        this.state.lanes[index] = (lane)

                        //  this.setState(state => {
                        //     const lanes = state.lanes.map(item => lane);
                        //     return {
                        //         lanes
                        //     };
                        // });
                    }

                }
                return true
            })
        }

    }

    getHeaderTimeData() {
        return <FrontendHeaderTimeComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            displayMode={this.props.displayMode}
            runningTime={this.props.runningTime} />
    }

    getFrontendLapData() {
        return <FrontendLapComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            displayMode={this.props.displayMode}
            runningTime={this.props.runningTime} />
    }

    getFrontendStartData() {
        return <FrontendStartComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            displayMode={this.props.displayMode}
            runningTime={this.props.runningTime} />
    }

    getFrontendFinishData() {
        return <FrontendFinishComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            displayMode={this.props.displayMode}
            runningTime={this.props.runningTime} />
    }

    getSwitchData() {

        switch (this.state.state) {
            case EnumHeatState.BeforeStart: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendStartData()
            } case EnumHeatState.Running: {
                if (this.state.lapdata) this.setState({ state: EnumHeatState.LapTimes })
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
                return this.getHeaderTimeData()
            } case EnumHeatState.LapTimes: {
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
                if (this.state.finishdata) this.setState({ state: EnumHeatState.Finished })
                return this.getFrontendLapData()
            } case EnumHeatState.Finished: {
                return this.getFrontendFinishData()
            } default: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                if (!this.state.runnning) this.setState({ state: EnumHeatState.BeforeStart })
                return this.getFrontendStartData()
            }
        }
    }

    render() {
        return (
            <div>
                {this.getSwitchData()}
            </div >
        )
    }
}
