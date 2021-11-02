import classnames from 'classnames';
import React from 'react';

interface LaneNumberInterface {
    laneNumber: string;
}

export default class LapNumber extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorTextNumber = classnames('colorTextNumber');
        let colorNumber = classnames('colorNumber');

        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let startpoint = 15
        let endPoint = startpoint + 25;
        let textPoint = startpoint + 8

        let boxSize = "M " + startpoint + " 3 h 25 v 25 h -25 z"
        let boxSizeTop = "M " + startpoint + " 0 h  25 v 3 h -25 z"

        let vieBox = "0 0 " + endPoint + "  30"

        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox={vieBox}
            height="30"
            width={endPoint}
        >
            <defs>
                <linearGradient id="laneNumberGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorNumber}
                        offset="0"
                    />
                    <stop
                        className={colorNumber}
                        offset="1"
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
                <linearGradient id="LaneNameGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorFrontNormal}
                        offset="0"
                    />
                    <stop
                        className={colorFrontNormalEnd}
                        offset="1"
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
                    d={boxSize}
                    fill="url(#laneNumberStyle)"
                />

                <path
                    transform="scale(1)"
                    d={boxSizeTop}
                    fill="url(#laneNumberStyle)"
                />

                <text
                    className={colorTextNumber}
                    y="20"
                    x={textPoint}
                    fontSize="24"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
}