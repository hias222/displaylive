import React from 'react';
import classnames from 'classnames';

interface EventNameInterface {
    EventName: string;
}

export default class EventName extends React.Component<EventNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorEventName = classnames('colorEventName');
        let colorEventNameEnd = classnames('colorEventNameEnd');
        let buttonEventName = classnames('buttonEventName');

        let boxheight = 20
        let buttonheight = 4

        let startPoint = 250

        let eventNamebox = "M " + startPoint + " 0 h 935 v " + boxheight + " h -935 z"
        let buttonNameBox = "M " + startPoint + " " + boxheight + " h 935 v " + buttonheight + "  h -935 z"
        let fontSize = 16


        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            //preserveAspectRatio="xMidYMax meet"
            preserveAspectRatio="xMaxYMax slice"
            id="svg8"
            version="1.1"
            viewBox="0 0 1240 {boxheight + buttonheight}"
            height={boxheight + buttonheight}
            width="935"
        >
            <defs>
                <linearGradient id="StartEventName" gradientTransform="rotate(0)">
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
                    id="EventNameHeaderStyle"
                    xlinkHref="#StartEventName"
                />
                <linearGradient id="ButtonEventName" gradientTransform="rotate(0)">
                    <stop
                        className={buttonEventName}
                        offset="0"
                        stopOpacity="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="0"
                    x2="1000"
                    y1="0"
                    x1="0"
                    id="ButtonNameHeaderStyle"
                    xlinkHref="#ButtonEventName"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d={eventNamebox}
                    fill="url(#EventNameHeaderStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y={fontSize - 2}
                    x={startPoint + 10}
                    fontSize={fontSize}
                    textAnchor="right"
                >
                    {this.props.EventName}</text>
                <path
                    transform="scale(1)"
                    d={buttonNameBox}
                    fill="url(#ButtonNameHeaderStyle)"
                />
            </g>
        </svg>
        );
    }
}