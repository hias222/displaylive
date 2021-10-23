import classnames from 'classnames';
import React from 'react';

interface LaneNumberInterface {
    laneNumber: string;
    laneStartPoint: number;
}

export default class StartNumber extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorTextNumber = classnames('colorTextNumber');
        let colorNumber = classnames('colorNumber');

        let startBoxValue =this.props.laneStartPoint + 35 

        let sizeViewBox = "0 0 " + startBoxValue + " 35"
        let boxSize = "M " + this.props.laneStartPoint + " 0 h 35 v 35 h -35 z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox={sizeViewBox}
            height="35"
            width={this.props.laneStartPoint + 35 }
        >
            <defs>
                <linearGradient id="laneStartNumberGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorNumber}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorNumber}
                        offset="1"
                        stopOpacity="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="2"
                    x2="20"
                    y1="-10"
                    x1="20"
                    id="laneStartNumberStyle"
                    xlinkHref="#laneStartNumberGradient"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    //d="M 0,50 0,47 0,24 0,0 30,0 c 15,0 29,0.0 29,0 l 0.50,0 -12,23 -12,23 -10,0 c -5,0 -13,0 -17,0 z"
                    d={boxSize}
                    fill="url(#laneStartNumberStyle)"
                />
                <text
                    className={colorTextNumber}
                    y="26"
                    x={this.props.laneStartPoint + 7}
                    fontSize="30"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
}