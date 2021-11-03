import React from 'react';
import classnames from 'classnames';

interface LaneNumberInterface {
    laneNumber: string;
    laneStartPoint: number;
}

export default class LanePlace extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorTextFinishPlace = classnames('colorTextFinishPlace');
        let colorNumber = classnames('colorNumber');

        let startBoxValue =this.props.laneStartPoint + 35 

        let viewHeight = 40

        let sizeViewBox = "0 0 " + startBoxValue + " " + viewHeight
        let boxSize = "M " + this.props.laneStartPoint + " 0 h 35 v 30 h -35 z"


        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox={sizeViewBox}
            height={viewHeight}
            width={this.props.laneStartPoint + 35 }
           >
            <defs>
                <linearGradient id="lanePlaceGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorNumber}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorNumber}
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
                    d={boxSize}
                    fill="url(#lanePlaceGradientStyle)"
                />
                <text
                    className={colorTextFinishPlace}
                    y="25"
                    x={this.props.laneStartPoint + 7}
                    fontSize="28"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
} 