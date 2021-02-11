import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LaneTime: string;
}

export default class LaneTime extends React.Component<LaneNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 100 25"
            height="25"
            width="100"
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
                    transform="scale(1)"
                    d="M 0 0 h 100 v 25 h -200 z"
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="18"
                    x="90"
                    fontSize="18"
                    textAnchor="end"
                >
                    {this.props.LaneTime}</text>
            </g>
        </svg>
        );
    }
} 