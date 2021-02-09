import React from 'react';
import classnames from 'classnames';

interface LaneNumberInterface {
    laneNumber: string;
}

export default class LanePlace extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorTextFinishPlace = classnames('colorTextFinishPlace');
        let colorFinishPlace = classnames('colorFinishPlace');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 35 35"
            height="35"
            width="35"
           >
            <defs>
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
                    //d="M 0,50 0,47 0,24 0,0 30,0 c 15,0 29,0.0 29,0 l 0.50,0 -12,23 -12,23 -10,0 c -5,0 -13,0 -17,0 z"
                    d="M 0 0 h 35 v 35 h -35 z"
                    fill="url(#lanePlaceGradientStyle)"
                />
                <text
                    className={colorTextFinishPlace}
                    y="27"
                    x="2"
                    fontSize="30"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
} 