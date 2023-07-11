import { GET_TRACKS__REQ, GET_TRACKS__SUC, PLAY_TRACKS_SUC, START_PLAYING, STOP_PLAYING } from "../../constants";
import {
    PlayAction,
    PlayState,
    TrackActions,
    TrackState,
} from "./tracks.types";

export const getTracksReducer = (
    state: TrackState = { isLoading: false, message: "", tracks: [] },
    action: TrackActions
): TrackState => {
    switch (action.type) {
        case GET_TRACKS__REQ:
            return {
                ...state,
                isLoading: true,
            };

        case GET_TRACKS__SUC:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload.tracks,
            };
        default:
            return state;
    }
};

export const playTrackReducer =  (
    state: PlayState = {
        visited: false,
        isLoading: false,
        shouldPlay: false,
        playing: false
    },
    action: PlayAction
): PlayState => {
    switch(action.type) {
        case PLAY_TRACKS_SUC:
            return {
                ...state,
                isLoading: false,
                shouldPlay: action.payload.shouldPlay,
                track: action.payload.track,
                visited: true
            }
        case START_PLAYING:
            return {
                ...state,
                playing: true,
                shouldPlay: false
            }
        case STOP_PLAYING:
            return {
                ...state,
                playing: false,
            }
        default:
            return state;
    }
};
