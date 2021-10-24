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

        let nameLength = 900 - 235 - this.props.laneStartPoint

        //665
        let viewBoxSize = "0 0 " + nameLength + " 35"
        let boxSize = "M 0 0 h " + nameLength + " v 35 h -" + nameLength + " z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height="35"
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
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d={boxSize}
                    fill="url(#laneNameStyle)"
                />
                <text
                    className={colorFrontTextNormal}
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