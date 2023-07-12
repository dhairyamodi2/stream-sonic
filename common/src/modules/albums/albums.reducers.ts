import { GET_ALBUMS__REQ, GET_ALBUMS__SUC } from "../../constants";
import { AlbumAction, AlbumState } from "./albums.types";

export const albumReducers = (state : AlbumState = {albums: [], topAlbums: [], message: '', isLoading: false}, action : AlbumAction) : AlbumState => {
    switch(action.type) {
        case GET_ALBUMS__REQ:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALBUMS__SUC:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                topAlbums: action.payload.topAlbums ? action.payload.topAlbums : state.topAlbums,
                albums: action.payload.albums ? action.payload.albums : state.albums
            }
        default:
            return state
    }
}