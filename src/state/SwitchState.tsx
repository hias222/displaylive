import { LaneData } from "../interfaces/lanedatainterface";

export enum EnumHeatState {
  BeforeStart,
  Running,
  LapTimes,
  Finished
}


export type SwitchState = {
  runnning: boolean;
  state: EnumHeatState;
  lapdata: boolean;
  finishdata: boolean;
  lanes: LaneData[];
};

