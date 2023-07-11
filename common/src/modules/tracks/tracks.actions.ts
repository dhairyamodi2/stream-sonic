import { Dispatch } from "redux"
import { TrackActions } from "./tracks.types"
import { GET_TRACKS__REQ, GET_TRACKS__SUC } from "../../constants"
import { fetchTracks} from 'client/src/modules/tracks/client';

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