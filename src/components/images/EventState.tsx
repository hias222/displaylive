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
            viewBox="0 0 935 80"
            height="80"
            width="935"
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
                    d="M 0 0 h 935 v 80 h -935 z"
                    fill="url(#EventStateHeaderStyle)"
                />
                <text
                    className={colorStateGreyTextName}
                    y="35"
                    x="460"
                    fontSize="32"
                    textAnchor="middle"
                >
                    {this.props.EventState}</text>

                <text
                    className={colorStateGreyTextName}
                    y="75"
                    x="460"
                    fontSize="32"
                    textAnchor="middle"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 