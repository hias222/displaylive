import React from 'react';
import classnames from 'classnames';


export default class BoxEmpty extends React.Component<{}, {}> {

    render() {
        let colorLaneName = classnames('colorLaneName');

        return (<svg
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMax meet"
            id="svg8"
            version="1.1"
            viewBox="0 0 235 4"
            height="4   "
            width="235"
            >
            <defs>
                <linearGradient id="EmptyBox" gradientTransform="rotate(0)">
                    <stop
                        offset="0"
                        stopOpacity="0"
                    />
                    <stop
                        offset="0"
                        stopOpacity="0"
                    />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="10"
                    x2="100"
                    y1="0"
                    x1="0"
                    id="laneEmptyBox"
                    xlinkHref="#EmptyBox"
                />
            </defs>
            <g
                id="layer1">
                <path
                    transform="scale(1)"
                    d="M 0 0 h 235 v 4 h -200 z"
                    fill="url(#laneEmptyBox)"
                />
            </g>
        </svg>
        );
    }
} 