import { LaneData } from "./lanedatainterface";

export interface LapInterface {
    lanes:  LaneData[];
    lapStoredTime: string[];
    LaneRefresh: number[];
    lastRefresh: number;
}
