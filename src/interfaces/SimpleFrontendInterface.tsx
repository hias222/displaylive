import { eventHeat } from "../types/EventHeat";
import { LaneData } from "./lanedatainterface";

export interface SimpleFrontendInterface {
    startdelayms: number;
    EventHeat: eventHeat;
    lanes: LaneData[];
    runningTime: string;
}
