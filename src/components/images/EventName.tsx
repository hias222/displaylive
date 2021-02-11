import React from 'react';
import classnames from 'classnames';

interface EventNameInterface {
    EventName: string;
}

export default class EventName extends React.Component<EventNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorEventName = classnames('colorEventName');
        let buttonEventName = classnames('buttonEventName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            //preserveAspectRatio="xMidYMax meet"
            preserveAspectRatio="xMaxYMax slice"
            id="svg8"
            version="1.1"
            viewBox="0 0 935 58"
            height="58"
            width="935"
        >
            <defs>
                <linearGradient id="StartEventName" gradientTransform="rotate(0)">
                    <stop
                        className={colorEventName}
                        offset="0"
                        stopOpacity="1"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="10"
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
                    y2="10"
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
                    d="M 0 0 h 935 v 50 h -935 z"
                    fill="url(#EventNameHeaderStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="38"
                    x="460"
                    fontSize="40"
                    textAnchor="middle"
                >
                    {this.props.EventName}</text>
                <path
                    transform="scale(1)"
                    d="M 0 50 h 935 v 8 h -935 z"
                    fill="url(#ButtonNameHeaderStyle)"
                />
            </g>
        </svg>
        );
    }
} 