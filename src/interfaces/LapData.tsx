import { LaneData } from "./lanedatainterface";

export interface LapInterface {
    lanes:  LaneData[];
    lapStatus: boolean[];
    lastRefresh: number;
}
