import { LaneData } from "../interfaces/lanedatainterface";
import { eventHeat } from "../types/EventHeat";

export type FrontendState = {
  startdelayms: number;
  racerunning: boolean;
  eventHeat: eventHeat;
  lanes: LaneData[];
  runningTime: string;
  displayMode: string;
  laplanedata: boolean;
  finishlanedata: boolean;
  MessageText: string;
  MessageTime: string;
  VideoVersion: string;
  lastChangeDate: number;
};

