import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./modules/auth/auth.reducers";
import { getTracksReducer, playTrackReducer } from "./modules/tracks/track.reducers";
import { albumReducers } from "./modules/albums/albums.reducers";
import { artistsReducers } from "./modules/artists/artists.reducers";



const reducers = combineReducers({
    auth : authReducers,
    tracks : getTracksReducer,
    playback : playTrackReducer,
    albums : albumReducers,
    artists : artistsReducers
})

const middleware = [thunk];

export const store = createStore(reducers, applyMiddleware(...middleware));
export type State = ReturnType<typeof reducers>

