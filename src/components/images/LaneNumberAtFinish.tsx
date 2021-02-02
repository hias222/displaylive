import React from 'react';
import classnames from 'classnames';

interface LaneNumberInterface {
    laneNumber: string;
}

export default class LaneNumberAtFinish extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 10 10"
            height="35"
            width="35"
           >
            <defs>
                <linearGradient id="laneNumberGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorLaneName}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorLaneName}
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
                    id="laneNumberStyle"
                    xlinkHref="#laneNumberGradient"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    //d="M 0,50 0,47 0,24 0,0 30,0 c 15,0 29,0.0 29,0 l 0.50,0 -12,23 -12,23 -10,0 c -5,0 -13,0 -17,0 z"
                    d="M 0 0 h 35 v 35 h -35 z"
                    fill="url(#laneNumberStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="8"
                    x="2"
                    fontSize="9"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
} 