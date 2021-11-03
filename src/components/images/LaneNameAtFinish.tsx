import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LaneName: string;
    laneStartPoint: number;
}

export default class LaneNameAtFinish extends React.Component<LaneNameInterface, {}> {

    render() {

        let colorFrontTextNormal = classnames('colorFrontTextNormal');
        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let colorNumber = classnames('colorNumber');

        let nameLength = 900 - 235 - this.props.laneStartPoint
        let viewHeight = 40

        //665
        let viewBoxSize = "0 0 " + nameLength + " 40"
        let boxSize = "M 0 3 h " + nameLength + " v 40 h -" + nameLength + " z"
        let boxSizeTop = "M 0 0 h " + nameLength + " v 3 h -" + nameLength + " z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height={viewHeight}
            width={nameLength}
        >
            <defs>
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
                    fill="url(#laneStartNumberStyle)"
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