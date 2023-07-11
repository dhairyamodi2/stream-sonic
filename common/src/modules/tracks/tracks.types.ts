import { TracksWithArtists } from "api/src/types/Prisma";

export interface TrackState {
    isLoading : boolean;
    message : string;
    tracks : Array<TracksWithArtists>
}


export interface TrackActions {
    type : string;
    payload : {
        message : string;
        tracks : Array<TracksWithArtists>
    }
}