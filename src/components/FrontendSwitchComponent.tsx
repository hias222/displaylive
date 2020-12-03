import React from "react";

import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { EnumHeatState, SwitchState } from "../state/SwitchState";
import { FrontendHeaderTimeComponent } from "./FrontendHeaderTimeComponent";
import { FrontendLapComponent } from "./FrontendLapComponent";

//import classnames from 'classnames';

export class FrontendSwitchComponent extends React.Component<BaseFrontendInterface, SwitchState> {

    constructor(props: BaseFrontendInterface) {
        super(props);

        this.state = {
            runnning: true,
            state: EnumHeatState.BeforeStart
        }
    }

    componentDidUpdate(prevProps: BaseFrontendInterface) {
        this.setFrontendState();
        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
        }

        if (prevProps.startdelayms !== this.props.startdelayms) {
            this.checkRunning();
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

    setFrontendState() {

        if (this.state.state === EnumHeatState.BeforeStart) {
            if (this.state.runnning) this.setState({ state: EnumHeatState.AfterStart })
        } else if (this.state.state === EnumHeatState.AfterStart) {
            if (!this.state.runnning) this.setState({ state: EnumHeatState.BeforeStart })
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

    getSwitchData() {
        if (this.state.state === EnumHeatState.BeforeStart) {
            return this.getHeaderTimeData()
        } else if (this.state.state === EnumHeatState.AfterStart) {
            return this.getFrontendLapData()
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
