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
  lapchangetime: number;
  finishdata: boolean;
  lanes: LaneData[];
  startTime: number;
};

