import React from "react";
import classnames from 'classnames';
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid, Box } from "@material-ui/core";
import checkName from "../../utilities/checkNames";
import LaneNumberAtFinish from "./LaneNumberAtFinish";

export default class StyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    formatEntryTime() {
        console.log("- " + this.props.entrytime)

        return this.props.entrytime;
    }

    render() {
        let staticlaneeven = classnames('staticlaneeven');
        let staticbox = classnames('staticbox');

        let correctName = checkName(20,this.props.swimmer);

        // className={staticlaneeven}
        //borderColor={"green"}
        return <Grid container >
            <Grid item xs={1} >
                <Box text-align={"center"} height={this.box_height} borderTop={1} borderLeft={0} borderBottom={0} className={staticbox}>
                    <Grid className={staticlaneeven}>  <LaneNumberAtFinish
                        laneNumber={this.props.lane} />
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={11}>
                <Box height={this.box_height} borderTop={1} borderBottom={0} className={staticbox}>
                    <Grid className={staticlaneeven}>  {correctName} ({this.props.swimmer.birthyear}) </Grid>
                </Box>
            </Grid>
        </Grid>

    }
}
