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

        let boxheight = 20
        let buttonheight = 3

        let startPoint = 275
 
        let wholeHeight = boxheight + buttonheight
        let wholeWidth = startPoint + 300

        let viewBox = "0 0 " + wholeWidth + " " + wholeHeight
        
        let eventNamebox = "M " + startPoint + " 0 h 300 v " + boxheight + " h -300 z"
        let fontSize = 16

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            //preserveAspectRatio="xMidYMax meet"
            preserveAspectRatio="xMaxYMax slice"
            id="svg8"
            version="1.1"
            viewBox={viewBox}
            height={wholeHeight}
            width={wholeWidth}
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
                    y={fontSize - 1}
                    x={startPoint + 10}
                    fontSize={fontSize}
                    textAnchor="right"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
}