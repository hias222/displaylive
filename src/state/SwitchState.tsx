import { LaneData } from "../interfaces/lanedatainterface";

export enum EnumHeatState {
  BeforeStart,
  Running,
  LapTimes,
  Finished,
  Ended
}


export type SwitchState = {
  runnning: boolean;
  state: EnumHeatState;
  lapchangetime: number;
  finishdata: boolean;
  lanes: LaneData[];
  startTime: number;
};

