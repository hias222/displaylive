import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LaneName: string;
}

export default class LaneNameAtFinish extends React.Component<LaneNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMaxYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 665 35"
            height="35"
            width="665"
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
                    y2="10"
                    x2="1500"
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
                    d="M 0 0 h 665 v 35 h -665 z"
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="27"
                    x="3"
                    fontSize="30"
                >
                    {this.props.LaneName}</text>
            </g>
        </svg>
        );
    }
} 