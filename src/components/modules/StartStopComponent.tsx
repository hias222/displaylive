import React from "react";
import { StartStopInterface } from "../../interfaces/StartStopInterface";
import { StartStopState } from "../../state/StartStopState";
import LapTime from "../images/LapTime";


export class StartStopComponent extends React.Component<StartStopInterface, StartStopState> {

    clocktimerid?: NodeJS.Timeout;

    constructor(props: StartStopInterface) {
        super(props);

        this.state = {
            displaytime: 0,
            start: Date.now() - props.startdelayms,
            isOn: false,
            runningTime: ""
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.clocktimer = this.clocktimer.bind(this)
    }

    format(ms: number) {
        var minutes = Math.floor(ms / (1000 * 60)),
            seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
            fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 100);

        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ',' + fract;
    }

    startTimer() {
        this.setState({
            isOn: true,
            start: Date.now() - this.props.startdelayms
        })

        if (this.clocktimerid) {
            var clocktimeridold = this.clocktimerid
            clearInterval(clocktimeridold)
        }
        this.clocktimerid = setInterval(this.clocktimer, 100);
    }

    //correctTimer(newTime: string) {
    //    console.log(newTime + " " + this.format(this.state.displaytime))
    //}

    async stopTimer() {
        this.setState({
            isOn: false,
            displaytime: 0,
            start: Date.now() - this.props.startdelayms,
        })

        if (this.clocktimerid !== undefined) {
            clearInterval(this.clocktimerid);
        }

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 250)
        });

        let result = await promise; // wait till the promise resolves (*)
        console.log(result)

    }

    clocktimer() {
        if (!this.state.isOn) {
            if (this.clocktimerid !== undefined) {
                clearInterval(this.clocktimerid);
            }
        }

        this.setState({
            displaytime: Date.now() - this.state.start
        })
    }

    componentDidUpdate(prevProps: StartStopInterface) {

        if (prevProps.startdelayms !== this.props.startdelayms) {

            if (this.props.startdelayms === -1) {
                //console.log("StartStopComponent: new Data stop " );
                this.stopTimer()
            } else {
                //console.log("StartStopComponent: start " + this.props.startdelayms);
                this.startTimer()
            }
        }

        if (prevProps.runningTime !== this.props.runningTime) {

            //this.correctTimer(this.props.runningTime);
            this.setState({
                runningTime: this.props.runningTime
            })

        }

    }

    componentWillUnmount() {
        if (this.clocktimerid !== undefined) {
            clearInterval(this.clocktimerid);
        }
    }

    componentDidMount() {
        if (this.props.startdelayms !== -1) {
            console.log("StartStopComponent: Mount start " + this.props.startdelayms);
            this.startTimer()
        }
    }

    render() {
        //let runningbackground = classnames('runningbackground');
        //let basepage = classnames('basepage');
        let eventname = this.props.EventHeat.name.substr(0, 13);

        return (
            <div>
                <LapTime
                    LapTime={this.format(this.state.displaytime)}
                    EventNr={this.props.EventHeat.eventnr}
                    HeatNr={this.props.EventHeat.heatnr}
                    EventName={eventname}
                    spaceFromTop={this.props.spaceFromTop}
                />
            </div> 
        );
    }
}