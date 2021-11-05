import React from 'react';
import classnames from 'classnames';

interface LaneNumberInterface {
    laneNumber: string;
}

export default class LaneNumberAtFinish extends React.Component<LaneNumberInterface, {}> {

    render() {
        let colorNumber = classnames('colorNumber');

        let colorFrontTextNormal = classnames('colorFrontTextNormal');
        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let nameLength = 35
        let viewHeight = 40

        let viewBoxSize = "0 0 35" +  viewHeight

        let boxSize = "M 0 0 h 35 v 35 h -35 z"
        let boxSizeTop = "M 0 0 h " + nameLength + " v 3 h -" + nameLength + " z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height={viewHeight}
            width="35"
           >
            <defs>
                <linearGradient id="laneNumberGradient" gradientTransform="rotate(0)">
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
                    fill="url(#laneNameStyle)"
                />
                <path
                    transform="scale(1)"
                    d={boxSizeTop}
                    fill="url(#laneNumberStyle)"
                />
                <text
                    className={colorFrontTextNormal}
                    y="30"
                    x="7"
                    fontSize="30"
                >
                    {this.props.laneNumber}</text>
            </g>
        </svg>
        );
    }
} 