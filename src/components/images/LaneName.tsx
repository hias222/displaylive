import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LaneName: string;
    laneStartPoint: number;
}

export default class LaneName extends React.Component<LaneNameInterface, {}> {

    render() {
        let colorFrontTextNormal = classnames('colorFrontTextNormal');
        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let colorNumber = classnames('colorNumber');

        let length = 900 - this.props.laneStartPoint
        let viewHeight = 40

        let lengthShort = length - 25;

        let viewBoxSize = "0 0 900 " + viewHeight
        let boxSize = "M 0 3 h " + length + " v 42 h -" + length + " z"
        let boxSizeTop = "M 0 0 h " + lengthShort + " v 3 h -" + length + " z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height={viewHeight}
            width="900"
        >
            <defs>
                <linearGradient id="laneStartNumberGradient" gradientTransform="rotate(0)">
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
                    id="laneStartNumberStyle"
                    xlinkHref="#laneStartNumberGradient"
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
            <g id="layer3">
                <path
                    transform="scale(1)"
                    d={boxSizeTop}
                    fill="url(#laneStartNumberStyle)"
                />
            </g>
            <g id="layer1">
                <path
                    transform="scale(1)"
                    d={boxSize}
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorFrontTextNormal}
                    y="30"
                    x="3"
                    fontSize="30"
                >
                    {this.props.LaneName}</text>
            </g>
        </svg>
        );
    }
}