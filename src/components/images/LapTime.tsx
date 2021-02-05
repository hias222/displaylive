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
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 250 50"
            height="50"
            width="250"
        >
            <defs>
                <linearGradient id="LaneNameGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorLaneName}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorLaneName}
                        offset="1"
                        stopOpacity="0"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="50"
                    x2="400"
                    y1="0"
                    x1="0"
                    id="laneNameStyle"
                    xlinkHref="#LaneNameGradient"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d="M 0 0 h 250 v 50 h -250 z"
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="35"
                    x="240"
                    fontSize="33"
                    textAnchor="end"
                >
                    {this.props.LapTime}</text>

                <text
                    className={colorTextLaneName}
                    y="20"
                    x="3"
                    fontSize="20"
                    textAnchor="start"
                >
                    W: {this.props.EventNr}</text>

                    <text
                    className={colorTextLaneName}
                    y="20"
                    x="100"
                    fontSize="20"
                    textAnchor="end"
                >
                    L: {this.props.HeatNr}</text>

                <text
                    className={colorTextLaneName}
                    y="42"
                    x="3"
                    fontSize="20"
                    textAnchor="start"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 