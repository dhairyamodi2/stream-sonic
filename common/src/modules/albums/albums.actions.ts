import { Dispatch } from "redux"
import { AlbumAction } from "./albums.types"
import { GET_ALBUMS__REQ, GET_ALBUMS__SUC } from "../../constants"
import { fetchAlbums } from "client/src/modules/albums/client"

export const getAlbums = function () {
    return async function(dispatch : Dispatch<AlbumAction>) {
        dispatch({
            type: GET_ALBUMS__REQ,
            payload: {
                message: 'Loading...'
            }
        })
        const {data, message} = await fetchAlbums({});
        dispatch({
            type: GET_ALBUMS__SUC,
            payload: {
                message: message,
                topAlbums: data
            }
        })
    }
}