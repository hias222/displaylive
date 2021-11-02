import React from 'react';
import classnames from 'classnames';

interface LaneNameInterface {
    LapTime: string;
    EventName: string;
    EventNr: string;
    HeatNr: string;
    spaceFromTop: number;
}

export default class LapTime extends React.Component<LaneNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorEventName = classnames('colorEventName');
        let colorEventNameEnd = classnames('colorEventNameEnd');

        let colorFrontTextNormal = classnames('colorFrontTextNormal');
        let colorFrontNormal = classnames('colorFrontNormal');
        let colorFrontNormalEnd = classnames('colorFrontNormalEnd');

        let colorNumber = classnames('colorNumber');

        let length = 180
        let lengthShort = length - 25;

        let viewBoxSize = "0 0 250 100"
        let boxTopEventName = "M 0 0 h 180 v 22 h -250 z"
        let boxTimeFrame = "M 0 24 h 180 v 26 h -250 z"
        let boxSizeTop = "M 0 22 h " + lengthShort + " v 3 h -" + length + " z"
        let boxEventTitle = "M 0 52 h 180 a 20 20 0 0 1 -20 20 h -160 z"
        let boxSizeButton = "M 0 50 h " + lengthShort + " v 3 h -" + length + " z"

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox={viewBoxSize}
            height={this.props.spaceFromTop}
            width="250"
        >
            <defs>
                <linearGradient id="laneRedTopLineGradient" gradientTransform="rotate(0)">
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
                    id="laneRedTopLineStyle"
                    xlinkHref="#laneRedTopLineGradient"
                />
                <linearGradient id="LapTimeGradient" gradientTransform="rotate(0)">
                    <stop
                        className={colorEventName}
                        offset="0"
                    />
                    <stop
                        className={colorEventNameEnd}
                        offset="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="0"
                    x2="400"
                    y1="0"
                    x1="0"
                    id="lapTimeStyle"
                    xlinkHref="#LapTimeGradient"
                />
                <linearGradient id="lanePlaceGradient" gradientTransform="rotate(0)">
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
                    y2="2"
                    x2="20"
                    y1="-10"
                    x1="20"
                    id="laneWhiteGradientStyle"
                    xlinkHref="#lanePlaceGradient"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d={boxTopEventName}
                    fill="url(#lapTimeStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="16"
                    x="3"
                    fontSize="16"
                    textAnchor="start"
                >
                    Wettkampf: {this.props.EventNr}</text>
                <text
                    className={colorTextLaneName}
                    y="16"
                    x="174"
                    fontSize="16"
                    textAnchor="end"
                >
                    Lauf: {this.props.HeatNr}</text>

                <path
                    transform="scale(1)"
                    d={boxTimeFrame}
                    fill="url(#laneWhiteGradientStyle)"
                />

                <path
                    transform="scale(1)"
                    d={boxSizeTop}
                    fill="url(#laneRedTopLineStyle)"
                />

                <text
                    className={colorFrontTextNormal}
                    y="44"
                    x="90"
                    fontSize="20"
                    textAnchor="middle"
                >
                    {this.props.LapTime}</text>

                <path
                    transform="scale(1)"
                    d={boxEventTitle}
                    fill="url(#laneWhiteGradientStyle)"
                />

                <path
                    transform="scale(1)"
                    d={boxSizeButton}
                    fill="url(#laneRedTopLineStyle)"
                />

                <text
                    className={colorFrontTextNormal}
                    y="68"
                    x="90"
                    fontSize="16"
                    textAnchor="middle"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
}