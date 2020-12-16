import React from 'react';
import classnames from 'classnames';

interface EventStateInterface {
    EventState: string;
    EventName: string;
}

export default class EventState extends React.Component<EventStateInterface, {}> {

    render() {
        let colorStateGreyTextName = classnames('colorStateGreyTextName');
        let colorStateGreyName = classnames('colorStateGreyName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 200 20"
            height="100"
            width="1000"
        >
            <defs>
                <linearGradient id="StartEventState" gradientTransform="rotate(0)">
                    <stop
                        className={colorStateGreyName}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorStateGreyName}
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
                    id="EventStateHeaderStyle"
                    xlinkHref="#StartEventState"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d="M 0 0 h 500 v 35 h -500 z"
                    fill="url(#EventStateHeaderStyle)"
                />
                <text
                    className={colorStateGreyTextName}
                    y="17"
                    x="100"
                    fontSize="8"
                    text-anchor="middle"
                >
                    {this.props.EventState}</text>

                <text
                    className={colorStateGreyTextName}
                    y="8"
                    x="100"
                    fontSize="10"
                    text-anchor="middle"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 