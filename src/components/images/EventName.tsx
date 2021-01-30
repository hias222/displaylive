import React from 'react';
import classnames from 'classnames';

interface EventNameInterface {
    EventName: string;
}

export default class EventName extends React.Component<EventNameInterface, {}> {

    render() {
        let colorTextLaneName = classnames('colorTextLaneName');
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" 
            //preserveAspectRatio="xMidYMax meet"
            preserveAspectRatio="xMaxYMax slice"
            id="svg8"
            version="1.1"
            viewBox="0 0 200 10"
            height="50"
            width="1000"
            >
            <defs>
                <linearGradient id="StartEventName" gradientTransform="rotate(0)">
                    <stop
                        className={colorLaneName}
                        offset="0"
                        stopOpacity="1"
                    />
                    <stop
                        className={colorLaneName}
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
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(0.3)"
                    d="M 0 0 h 1000 v 50 h -1000 z"
                    fill="url(#EventNameHeaderStyle)"
                />
                <text
                    className={colorTextLaneName}
                    y="8"
                    x="100"
                    fontSize="9"
                    textAnchor="middle"
                >
                    {this.props.EventName}</text>
            </g>
        </svg>
        );
    }
} 