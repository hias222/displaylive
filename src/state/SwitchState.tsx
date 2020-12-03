export enum EnumHeatState {
  AfterStart,
  BeforeStart,
  Running,
  LapTimes,
  FinishTimes,
  Finished
}

export type SwitchState = {
  runnning: boolean;
  state: EnumHeatState;
};

