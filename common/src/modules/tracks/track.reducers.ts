import { GET_TRACKS__REQ, GET_TRACKS__SUC } from "../../constants";
import { TrackActions, TrackState } from "./tracks.types";

export const getTracksReducer =  (state : TrackState = {isLoading: false, message: '', tracks: []}, action : TrackActions) : TrackState => {
    switch(action.type) {
        case GET_TRACKS__REQ:
            return {
                ...state,
                isLoading: true,
            }

        case GET_TRACKS__SUC:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload.tracks
            }
        default:
            return state
    }
}