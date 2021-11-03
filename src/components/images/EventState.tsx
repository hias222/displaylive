import React from 'react';
import classnames from 'classnames';

interface EventStateInterface {
    EventState: string;
    EventName: string;
}

export default class EventState extends React.Component<EventStateInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorEventName = classnames('colorEventName');
        let colorEventNameEnd = classnames('colorEventNameEnd');

        let boxHeight=40
        let startPoint = 250
        let textBoxSize="M " + startPoint + "  0 h 935 v " + boxHeight + "h -935 z"
        let textStart = startPoint /2 + 460


        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 935 {boxHeight}"
            height={boxHeight}
            width="935"
        >
            <defs>
                <linearGradient id="StartEventState" gradientTransform="rotate(0)">
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
                    x2="1000"
                    y1="0"
                    x1="0"
                    id="EventStateHeaderStyle"
                    xlinkHref="#StartEventState"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d={textBoxSize}
                    fill="url(#EventStateHeaderStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="25"
                    x={textStart}
                    fontSize="28"
                    textAnchor="middle"
                >
                    {this.props.EventState}</text>

                <text
                    className={colorTextLaneName}
                    y={boxHeight-4}
                    x={startPoint + 4}
                    fontSize="16"
                    textAnchor="right"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 