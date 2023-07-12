import { ARTISTS_LOADING, ARTISTS_SUC } from "../../constants";
import { ArtistsActions, ArtistsState } from "./artists.types";

export const artistsReducers = (state : ArtistsState = {isLoading: false, artists: [], topArtists: []}, action: ArtistsActions) : ArtistsState => {
    switch(action.type) {
        case ARTISTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ARTISTS_SUC: {
            return {
                ...state,
                isLoading: false,
                artists: action.payload.artists ? action.payload.artists : state.artists,
                topArtists: action.payload.topArtists ? action.payload.topArtists : state.topArtists
            }
        }
        default:
            return state;
    }
}