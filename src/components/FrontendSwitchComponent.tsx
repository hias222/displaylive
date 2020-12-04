import React from "react";

import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { EnumHeatState, SwitchState } from "../state/SwitchState";
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
            results: false,
            state: EnumHeatState.BeforeStart
        }
    }

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (prevProps.displayMode !== this.props.displayMode) {
            if(this.props.displayMode === "race") this.checkResults()
        }

        //check exist index
        //this.props.lanes.map((lane, index) => (
        //    console.log(lane.finishtime + "" +  prevProps.lanes[index].finishtime)
        //))

        if (prevProps.lanes !== this.props.lanes) {
            console.log("+++++++++++++++++")
        }

        if (prevProps.startdelayms !== this.props.startdelayms) {
            this.checkRunning();
        }

        if (prevProps.EventHeat.heatnr !== this.props.EventHeat.heatnr) {
            this.setState({ state: EnumHeatState.BeforeStart })
        }

        if (prevProps.EventHeat.eventnr !== this.props.EventHeat.eventnr) {
            this.setState({ state: EnumHeatState.BeforeStart })
        }

    }

    checkRunning() {
        if (this.props.startdelayms === -1) {
            this.setState({
                runnning: false,
                results: false
            })
        } else {
            this.setState({
                runnning: true
            })
        }
    }

    checkResults() {
        this.setState({
            results: true
        })
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

        switch(this.state.state){
            case EnumHeatState.BeforeStart: {
                if (this.state.runnning) this.setState({ state: EnumHeatState.Running })
                return this.getFrontendStartData()
            } case EnumHeatState.Running: {
                if (this.state.results) this.setState({ state: EnumHeatState.LapTimes })
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
                return this.getHeaderTimeData()
            } case EnumHeatState.LapTimes: {
                if (!this.state.runnning) this.setState({ state: EnumHeatState.Finished })
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
