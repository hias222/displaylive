import React from "react";

import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { EnumHeatState, SwitchState } from "../state/SwitchState";
import { FrontendFinishComponent } from "./FrontendFinishComponent";
import { FrontendRunningComponent } from "./FrontendRunningComponent";
import { FrontendStartComponent } from "./FrontendStartComponent";

//import classnames from 'classnames';

export class FrontendSwitchComponent extends React.Component<BaseFrontendInterface, SwitchState> {

    constructor(props: BaseFrontendInterface) {
        super(props);

        this.state = {
            runnning: false,
            finishdata: false,
            lapchangetime: Date.now(),
            state: EnumHeatState.BeforeStart,
            lanes: [],
            startTime: 0
        }

    }

    componentDidMount() {
        this.checkRunning();
    }

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (prevProps.startdelayms !== this.props.startdelayms) {
            this.checkRunning();
        }

        if (prevProps.lastChangeDate !== this.props.lastChangeDate) {
            this.setState({
                lapchangetime: Date.now()
            })
        }

        if (prevProps.finishdata !== this.props.finishdata) {
            if (this.props.finishdata) {
                this.setState({
                    finishdata: true,
                })
            }
        }

        if (prevProps.EventHeat.heatnr !== this.props.EventHeat.heatnr) {
            this.setState({
                state: EnumHeatState.BeforeStart,
                finishdata: false,
            })

        }
        if (prevProps.EventHeat.eventnr !== this.props.EventHeat.eventnr) {
            this.setState({
                state: EnumHeatState.BeforeStart,
                finishdata: false,
            })
        }


    }

    checkRunning() {
        if (true) {
            if (this.props.startdelayms === -1) {
                this.setState({
                    runnning: false,
                    startTime: 0,
                    finishdata:false
                })
            }

            // start without stop
            if (this.props.startdelayms === 0) {
                this.setState({
                    runnning: false,
                    startTime: 0,
                    finishdata: false
                })
            }

            if (this.props.startdelayms !== 0 && this.props.startdelayms !== -1) {
                console.log("start delay " + this.props.startdelayms)
                this.setState({
                    runnning: true,
                    startTime: Date.now() - this.props.startdelayms
                })
            }
        }
    }

    laneInfo() {
        console.log("laneinfo")
        this.props.lanes.map((lane, index) => {
            console.log("lane " + lane.lap + " " + index)
            return null
        })
    }

    getFrontendRunningData() {
        return <FrontendRunningComponent
            startdelayms={Date.now() - this.state.startTime}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            runningTime={this.props.runningTime} />
    }

    getFrontendBeforeStart() {
        return <FrontendStartComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            runningTime={this.props.runningTime} />
    }

    getFrontendFinishData() {
        return <FrontendFinishComponent
            startdelayms={this.props.startdelayms}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            runningTime={this.props.runningTime}
            active={this.state.runnning} />
    }

    getSwitchData() {

        switch (this.state.state) {
            case EnumHeatState.BeforeStart: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendBeforeStart()
            } case EnumHeatState.Running: {
                //ggf start delay setzen
                //console.log("State Running")
                if (this.state.finishdata) this.setState({ state: EnumHeatState.Finished })
                if (!this.state.runnning) this.setState({ state: EnumHeatState.BeforeStart })
                return this.getFrontendRunningData()
            } case EnumHeatState.Finished: {
                // reset by stop over properties
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Ended })
                return this.getFrontendFinishData()
            } case EnumHeatState.Ended: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendFinishData()
            } default: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                if (!this.state.runnning) this.setState({ state: EnumHeatState.BeforeStart })
                return this.getFrontendBeforeStart()
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
