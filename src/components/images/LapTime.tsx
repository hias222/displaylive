import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LapTime: string;
    EventName: string;
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
            viewBox="0 0 60 20"
            height="50"
            width="150"
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
                        offset="0"
                        stopOpacity="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="10"
                    x2="100"
                    y1="0"
                    x1="0"
                    id="laneNameStyle"
                    xlinkHref="#LaneNameGradient"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(0.3)"
                    d="M 0 0 h 200 v 70 h -200 z"
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="9"
                    x="50"
                    fontSize="9"
                    textAnchor="end"
                >
                    {this.props.LapTime}</text>
                    <text
                    className={colorTextLaneName}
                    y="17"
                    x="50"
                    fontSize="8"
                    textAnchor="end"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 