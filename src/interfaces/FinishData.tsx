import { LaneData } from "./lanedatainterface";

export interface FinishInterface {
    lanes:  LaneData[];
    finishStoredTime: string[];
    lastRefresh: number;
    finishStoredLane: boolean[];
}
