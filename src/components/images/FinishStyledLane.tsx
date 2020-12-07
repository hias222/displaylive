import React from "react";
import classnames from 'classnames';
import { LaneData } from "../../interfaces/lanedatainterface";
import { Grid } from "@material-ui/core";
export default class FinishStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    checkName() {
        let namelength = 20;

        let sizeName = this.props.swimmer.name.length;
        let sizeLastName = (this.props.swimmer.firstName !== undefined) ? this.props.swimmer.firstName.length : 0

        if (sizeName > (namelength - 2)) {
            console.log("short name")
            return this.props.swimmer.name.substr(0, (namelength - 2));
        }

        if (sizeName + sizeLastName > namelength) {
            return this.props.swimmer.name + " " + this.props.swimmer.firstName?.substr(0, 1) + ".";
        }

        let name = this.props.swimmer.name + " " + this.props.swimmer.firstName

        return name
    }

    render() {
        let finishlane = classnames('finishlane');
        let correctName = this.checkName();

        return <Grid container item xs={12}>
            <Grid item xs={1}>
                    <Grid className={finishlane}>
                        {this.props.lane}
                    </Grid>
            </Grid>

            <Grid item xs={1}>
                    <Grid className={finishlane}>
                       {this.props.place}
                    </Grid>
            </Grid>

            <Grid item xs={7}>
                    <Grid className={finishlane}>
                        {correctName}
                    </Grid>
            
            </Grid>
            <Grid item xs={3} text-align={"center"}>
                    <Grid className={finishlane}>
                        {this.props.finishtime}
                    </Grid>
            </Grid>
        </Grid>;

    }
}
