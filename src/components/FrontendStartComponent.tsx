import React from "react";
import { HeaderEventHeatComponent } from "./modules/HeaderEventHeatComponent";
import { StartLaneComponent } from "./modules/StartLaneComponent";
import { SimpleFrontendInterface } from "../interfaces/SimpleFrontendInterface";
import { EventNameComponent } from "./modules/EventNameComponent";
import { EventStateComponent } from "./modules/EventStateComponent";

export class FrontendStartComponent extends React.Component<SimpleFrontendInterface, {}> {

    componentDidUpdate(prevProps: SimpleFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
        }
    }


    /*
    {
  athleteid: "4002",
  birthdate: "2001-01-01",
  firstname: "Max",
  lastname: "Mustermann",
  lane: "2",
  entrytime: "00:01:04.90",
  name: "SG Mittelfranken",
  code: "6768",
  type: "lane",
  event: "1",
  place: "2",
  finishtime: "1:19,15",
  heat: "1",
  lap: "false",
}
*/
    render() {

        return (
            <div>
                <EventNameComponent
                EventName={this.props.EventHeat.competition !== undefined ? this.props.EventHeat.competition : 'undefinend'}/>

                <EventStateComponent
                EventState='Startlist'/>

                <HeaderEventHeatComponent
                    EventHeat={this.props.EventHeat}
                />

                {
                    this.props.lanes.map((lane, index) => (
                        <StartLaneComponent
                            key={index}
                            lane={lane}
                            index={index}
                        />
                    ))
                }

            </div >
        )
    }
}


/*
<Grid container >
                    {
                        this.props.lanes.map((lane, index) => (
                            <SingleLaneStaticComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={this.props.displayMode}
                            />
                        ))
                    }
                    <Grid item xs={12}>

                            <Box
                                borderTop={1} borderLeft={0} borderBottom={0} className={staticbox}>
                                    <Grid className={staticlaneeven}>
                                    {this.props.EventHeat.competition}
                                    </Grid>

                            </Box>

                    </Grid>
                </Grid>
                */