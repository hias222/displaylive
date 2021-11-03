import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LaneTime: string;
}

export default class LaneTimeAtFinish extends React.Component<LaneNameInterface, {}> {

    render() {

        let colorFrontTextNormal = classnames('colorFrontTextNormal');
        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let colorNumber = classnames('colorNumber');

        let viewHeight = 40

        let boxTop = "M 0 3 h 200 v 35 h -200 z"
        let boxTopLine = "M 0 0 h 170 v 3 h -200 z"

        let viewBoxSize ="0 0 200 " + viewHeight

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height={viewHeight}
            width="200"
        >
            <defs>
                <linearGradient id="LaneNameGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorFrontNormal}
                        offset="0"
                    />
                    <stop
                        className={colorFrontNormalEnd}
                        offset="0"
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
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d={boxTop}
                    fill="url(#laneNameStyle)"
                />
                <path
                    transform="scale(1)"
                    d={boxTopLine}
                    fill="url(#laneNumberStyle)"
                />
                <text
                    className={colorFrontTextNormal}
                    y="30"
                    x="182"
                    fontSize="30"
                    textAnchor="end"
                >
                    {this.props.LaneTime}</text>
            </g>
        </svg>
        );
    }
}