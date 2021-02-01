import { eventHeat } from "../types/EventHeat";
import { LaneData } from "./lanedatainterface";

export interface BaseFrontendInterface {
    onLapReset: (lap: boolean) => void;
    startdelayms: number;
    EventHeat: eventHeat;
    lanes: LaneData[];
    displayMode: string;
    runningTime: string;
    finishdata: boolean;
    lapdata: boolean;
    lastChangeDate: number;
}
