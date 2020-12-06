import { swimmerData } from "../types/SwimmerData";

export interface LaneData {
    lane: string;
    entrytime?: string;
    finishtime?: string;
    place?: string;
    lap?: string;
    swimmer: swimmerData;
}

