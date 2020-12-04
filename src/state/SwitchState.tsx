export enum EnumHeatState {
  BeforeStart,
  Running,
  LapTimes,
  Finished
}

export type SwitchState = {
  runnning: boolean;
  results: boolean;
  state: EnumHeatState;
};

