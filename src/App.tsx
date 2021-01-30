import React from 'react';
import './styles/App.scss';
import { WsSocketState } from './services/WsSocketState';
import { FrontendState } from './state/FrontendState';

import classnames from 'classnames';
import { Box, Container, Grid } from '@material-ui/core';
import { eventHeat } from './types/EventHeat';
import { FrontendSwitchComponent } from './components/FrontendSwitchComponent';
import { LaneData } from './interfaces/lanedatainterface';

// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
// https://medium.com/@RupaniChirag/parent-child-communication-in-vue-angular-and-react-all-in-typescript-9a47c75cbf74
///type FrontendState = {
//  event: string;
//};


export default class Lcd extends React.Component<{}, FrontendState> {

    mylane: LaneData[];
    resultData: LaneData[];
    correctValueForLaneNull: number;
    evenHeat: eventHeat;

    window_width: number;
    window_height: number;
    //PIXEL_FROM_TOP
    window_top_pixel: number;


    constructor(props: {}) {
        super(props);
        this.onStartStop = this.onStartStop.bind(this);
        this.onEventHeatChange = this.onEventHeatChange.bind(this);
        this.onLaneChange = this.onLaneChange.bind(this);
        this.onDisplayModeChange = this.onDisplayModeChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onRunningTimeChange = this.onRunningTimeChange.bind(this);
        this.clearResults = this.clearResults.bind(this);

        this.evenHeat = {
            name: "new",
            heatnr: "0",
            eventnr: "0"
        }

        this.resultData = []

        this.state = {
            laplanedata: false,
            finishlanedata: false,
            startdelayms: -1,
            runningTime: "",
            racerunning: false,
            eventHeat: this.evenHeat,
            lanes: [],
            displayMode: "race",
            MessageText: "",
            MessageTime: Date.now().toString(),
            VideoVersion: "",
            lastChangeDate: Date.now()
        };

        this.mylane = [];
        this.correctValueForLaneNull = 0;
        this.window_width = process.env.REACT_APP_PIXEL_WIDTH !== undefined ? Number(process.env.REACT_APP_PIXEL_WIDTH) : 512
        this.window_height = process.env.REACT_APP_PIXEL_HEIGHT !== undefined ? Number(process.env.REACT_APP_PIXEL_HEIGHT) : 384
        this.window_top_pixel = process.env.REACT_APP_PIXEL_FROM_TOP !== undefined ? Number(process.env.REACT_APP_PIXEL_FROM_TOP) : 0

    }
    async onStartStop(startdelayms: number) {
        //console.log("App: start or stop event (" + startdelayms + ")");
        // start without stop
        if (startdelayms !== -1) {
            if (this.state.racerunning) {
                this.setState({
                    startdelayms: 0,
                    racerunning: false,
                    laplanedata: false,
                    finishlanedata: false
                });
            }
        }
        this.setState({
            startdelayms: startdelayms,
            racerunning: true,
            laplanedata: false,
            finishlanedata: false
        });
    }

    onEventHeatChange(EventHeat: eventHeat) {
        this.setState({
            eventHeat: EventHeat
        });
    }


    onRunningTimeChange(RunningTime: string) {
        this.setState({
            runningTime: RunningTime
        });
        console.log("onRunningTimeChange" + RunningTime)
    }

    onLaneChange(lane: number, LaneData: any) {

        // -1 clear All
        // -2 Clear Result
        this.setState({
            lastChangeDate: Date.now()
        })

        if (lane === -1) {
            console.log("+++++ clear all")
            this.correctValueForLaneNull = 0;
            this.setState({
                lanes: this.mylane = []
            })
            return
        }

        if (lane === -2) {
            this.correctValueForLaneNull = 0;
            this.clearResults();
            // todo
            return
        }

        //else {

        if (LaneData.lap !== undefined) {
            if (LaneData.lap === "true") {
                if (!this.state.finishlanedata) {
                    if (!this.state.laplanedata) {
                        console.log("service change lap " + this.state.laplanedata + " finish " + this.state.finishlanedata)
                        this.setState({
                            laplanedata: true
                        })
                    }
                }
            }

            if (LaneData.finish !== undefined) {
                if (LaneData.finish === "true") {
                    if (!this.state.finishlanedata) {
                        console.log("service change to finish + " + LaneData.finish)
                        this.setState({
                            finishlanedata: true
                        })
                    }
                }
            }
        }

        // eslint-disable-next-line
        if (lane == 0 && this.correctValueForLaneNull != 1) {
            console.log("+++++ 0")
            this.correctValueForLaneNull = 1;
        }
        var sizeLanes = this.mylane.length - this.correctValueForLaneNull

        if (lane > sizeLanes) {
            // console.log(lane + ": new (" + this.correctValueForLaneNull + ")")
            //this.mylane.push(LaneData)
            this.mylane.push(this.validateLaneDate(LaneData))
        } else {
            this.mylane[lane - 1 + this.correctValueForLaneNull] = (this.validateLaneDate(LaneData))
            //console.log(lane + ": change (" + this.correctValueForLaneNull + ")")
        }

        this.setState({
            lanes: this.mylane
        })
        //}
    }


    validateLaneDate(wsLaneData: any) {
        var newlaneData: LaneData = {
            lane: wsLaneData.lane,
            finishtime: wsLaneData.finishtime,
            lap: wsLaneData.lap,
            place: wsLaneData.place,
            entrytime: wsLaneData.entrytime,
            swimmer: {
                name: wsLaneData.lastname,
                clubid: wsLaneData.code,
                clubname: wsLaneData.name,
                birthyear: wsLaneData.birthdate,
                firstName: wsLaneData.firstname,
                athleteid: wsLaneData.athleteid
            }
        }
        return newlaneData;
    }

    onDisplayModeChange(displaymode: string) {
        // console.log("change to " + displaymode)
        this.setState({
            displayMode: displaymode
        })
    }

    onMessageChange(message: any) {

        if (message.version !== undefined) {
            this.setState({
                VideoVersion: message.version
            })
        }

        if (message.value !== undefined) {
            this.setState({
                MessageText: message.value
            })
        }

        if (message.time !== undefined) {
            this.setState({
                MessageTime: message.time
            })
        } else {
            this.setState({
                MessageTime: Date.now().toString()
            })
        }

    }

    handleFullscreen = (e: any) => {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        }
        /*
        else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen()
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen()
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen()
        }
        */
    };

    async clearResults() {
        console.log("+++++ clear Results")
        this.resultData = []
        this.state.lanes.map((lane, index) => {
            lane.finishtime = '';
            this.resultData.push(lane)
            return null
        })

        this.setState({
            finishlanedata: false,
            laplanedata: false,
            lanes: this.resultData
        })
    }

    render() {
        let basepage = classnames('basepage');
        return (
            <div>
                <Box width={this.window_width} height={this.window_height} className={basepage}>
                    <Container>
                        <Grid container item xs={12} spacing={0}>
                            <Grid item xs={12}> . </Grid>
                            <WsSocketState onStartStop={this.onStartStop}
                                onEventHeatChange={this.onEventHeatChange}
                                onLaneChange={this.onLaneChange}
                                onDisplayModeChange={this.onDisplayModeChange}
                                onRunningTimeChange={this.onRunningTimeChange}
                                onMessageChange={this.onMessageChange} />

                            <FrontendSwitchComponent
                                startdelayms={this.state.startdelayms}
                                EventHeat={this.state.eventHeat}
                                lanes={this.state.lanes}
                                displayMode={this.state.displayMode}
                                runningTime={this.state.runningTime}
                                finishdata={this.state.finishlanedata}
                                lapdata={this.state.laplanedata}
                                lastChangeDate={this.state.lastChangeDate}
                            />
                        </Grid>
                    </Container>
                </Box>

            </div >
        );
    }
}
