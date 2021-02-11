import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LapTime: string;
    EventName: string;
    EventNr: string;
    HeatNr: string;
}

export default class LapTime extends React.Component<LaneNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorLapTimeStart = classnames('colorLapTimeStart');
        let colorLapTimeEnd = classnames('colorLapTimeEnd');

        let colorTextFinishPlace = classnames('colorTextFinishPlace');
        let colorFinishPlace = classnames('colorFinishPlace');

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 250 100"
            height="100"
            width="250"
        >
            <defs>
                <linearGradient id="LapTimeGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorLapTimeStart}
                        offset="0"
                    />
                    <stop
                        className={colorLapTimeEnd}
                        offset="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="0"
                    x2="400"
                    y1="0"
                    x1="0"
                    id="lapTimeStyle"
                    xlinkHref="#LapTimeGradient"
                />
                <linearGradient id="lanePlaceGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorFinishPlace}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorFinishPlace}
                        offset=""
                        stopOpacity="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="2"
                    x2="20"
                    y1="-10"
                    x1="20"
                    id="lanePlaceGradientStyle"
                    xlinkHref="#lanePlaceGradient"
                />
            </defs>
            <g
                id="layer1">

                <path
                    transform="scale(1)"
                    d="M 0 0 h 180 v 22 h -250 z"
                    fill="url(#lanePlaceGradientStyle)"
                />

                <text
                    className={colorTextFinishPlace}
                    y="16"
                    x="3"
                    fontSize="14"
                    textAnchor="start"
                >
                    Wettkampf: {this.props.EventNr}</text>
                <text
                    className={colorTextFinishPlace}
                    y="16"
                    x="174"
                    fontSize="14"
                    textAnchor="end"
                >
                    Lauf: {this.props.HeatNr}</text>

                <path
                    transform="scale(1)"
                    d="M 0 24 h 180 v 26 h -250 z"
                    fill="url(#lapTimeStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="44"
                    x="178"
                    fontSize="20"
                    textAnchor="end"
                >
                    {this.props.LapTime}</text>

                <path
                    transform="scale(1)"
                    d="M 0 52 h 180 a 20 20 0 0 1 -20 20 h -160 z"
                    fill="url(#lapTimeStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="68"
                    x="90"
                    fontSize="16"
                    textAnchor="middle"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 