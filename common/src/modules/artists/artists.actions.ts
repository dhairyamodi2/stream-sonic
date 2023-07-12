import { Dispatch } from "redux"
import { ArtistsActions, ArtistsState } from "./artists.types"
import { ARTISTS_LOADING, ARTISTS_SUC } from "../../constants"
import {fetchArtists} from 'client/src//modules/artists/client'


export const getArtists = function () {
    return async function (dispatch : Dispatch<ArtistsActions>) {
        dispatch({
            type : ARTISTS_LOADING,
            payload: {}
        })

        const {data, message} = await fetchArtists();
        dispatch({
            type: ARTISTS_SUC,
            payload: {
                topArtists: data
            }
        })
    }
}