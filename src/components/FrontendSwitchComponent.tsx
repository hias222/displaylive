import React from "react";

import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";

import { EnumHeatState, SwitchState } from "../state/SwitchState";

import { FrontendFinishComponent } from "./FrontendFinishComponent";
import { FrontendHeaderTimeComponent } from "./FrontendHeaderTimeComponent";
import { FrontendLapComponent } from "./FrontendLapComponent";
import { FrontendStartComponent } from "./FrontendStartComponent";

//import classnames from 'classnames';

export class FrontendSwitchComponent extends React.Component<BaseFrontendInterface, SwitchState> {

    intervalId: NodeJS.Timeout;

    constructor(props: BaseFrontendInterface) {
        super(props);

        this.state = {
            runnning: false,
            lapdata: false,
            finishdata: false,
            lapchangetime: Date.now(),
            state: EnumHeatState.BeforeStart,
            lanes: [],
            startTime: 0
        }
        this.laptimer = this.laptimer.bind(this)
        this.intervalId = setInterval(this.laptimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidMount() {
        this.checkRunning();
    }

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (prevProps.startdelayms !== this.props.startdelayms) {
            this.checkRunning();
        }

        if (prevProps.lastChangeDate !== this.props.lastChangeDate){
            this.setState({
                lapchangetime: Date.now()
            })
        }

        if (prevProps.finishdata !== this.props.finishdata) {
            if (this.props.finishdata) {
                console.log("switch to finish")
                this.setState({
                    finishdata: true,
                    lapdata: false
                })
            }
        }

        // wrong
        if (prevProps.lapdata !== this.props.lapdata) {
            if (this.props.lapdata) {
                console.log("switch to lap")
                this.setState({
                    lapdata: true
                })
            }
        }

        if (prevProps.EventHeat.heatnr !== this.props.EventHeat.heatnr) {
            console.log("heat change reset - running " + this.state.runnning)
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

    laptimer() {
        if (this.state.lapdata) {
            var changesinceseconds = Date.now() - this.state.lapchangetime
            //console.log("last lap time before ms " + changesinceseconds)
            if (changesinceseconds > 10000) {
                console.log("lap time reset " + changesinceseconds)
                this.setState({
                    lapdata: false
                })
                this.props.onLapReset(false)
            }
        }
    }


    checkRunning() {
        if (true) {
            if (this.props.startdelayms === -1) {
                this.setState({
                    runnning: false,
                    startTime: 0
                })
            } else {
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

    getHeaderTimeData() {
        return <FrontendHeaderTimeComponent
            startdelayms={Date.now() - this.state.startTime}
            EventHeat={this.props.EventHeat}
            lanes={this.props.lanes}
            runningTime={this.props.runningTime}
        />
    }

    getFrontendLapData() {
        return <FrontendLapComponent
            startdelayms={-1}
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
            runningTime={this.props.runningTime} />
    }

    getSwitchData() {

        switch (this.state.state) {
            case EnumHeatState.BeforeStart: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendBeforeStart()
            } case EnumHeatState.Running: {
                //ggf start delay setzen
                if (this.state.lapdata) this.setState({ state: EnumHeatState.LapTimes })
                if (this.state.finishdata) this.setState({ state: EnumHeatState.Finished })
                // restart vergessen
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
                return this.getHeaderTimeData()
            } case EnumHeatState.LapTimes: {
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
                if (this.state.finishdata) this.setState({ state: EnumHeatState.Finished })
                if (!this.state.lapdata) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendLapData()
            } case EnumHeatState.Finished: {
                // reset by stop over properties
                if (!this.state.finishdata && !this.state.lapdata) this.setState({ state: EnumHeatState.BeforeStart })
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
