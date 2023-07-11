import { Dispatch } from "redux"
import { PlayAction, TrackActions } from "./tracks.types"
import { GET_TRACKS__REQ, GET_TRACKS__SUC, PLAY_TRACKS_SUC } from "../../constants"
import { fetchTracks} from 'client/src/modules/tracks/client';
import { TracksWithArtists } from "api/src/types/Prisma";

export const getTracks = function () {
    return async function (dispatch : Dispatch<TrackActions>) {
        dispatch({
            type: GET_TRACKS__REQ,
            payload: {tracks: [], message: 'Loading...'}
        })

        const {message, data} = await fetchTracks();
        dispatch({
            type: GET_TRACKS__SUC,
            payload: {tracks: data, message: ''}
        })
    }
}


export const playTracks = function (track : TracksWithArtists, shouldPlay : boolean) {
    return async function (dispatch : Dispatch<PlayAction>) {
        dispatch({
            type : PLAY_TRACKS_SUC,
            payload: {
                track: track,
                shouldPlay: shouldPlay
            }
        })
    }
}