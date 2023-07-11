import { TrackWithAlbum, TracksWithArtists } from "api/src/types/Prisma";

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


export interface PlayState {
    visited : boolean;
    isLoading : boolean;
    track? : TracksWithArtists
    shouldPlay : boolean;
    playing : boolean;
}

export interface PlayAction {
    type : string;
    payload : {
        track : TracksWithArtists;
        shouldPlay : boolean;
    }
}