import { eventHeat } from "../types/EventHeat";
import { LaneData } from "./lanedatainterface";

export interface FinishFrontendInterface {
    startdelayms: number;
    EventHeat: eventHeat;
    lanes: LaneData[];
    runningTime: string;
    active: boolean;
}
