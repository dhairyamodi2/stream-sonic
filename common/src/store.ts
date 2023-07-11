import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./modules/auth/auth.reducers";
import { getTracksReducer, playTrackReducer } from "./modules/tracks/track.reducers";



const reducers = combineReducers({
    auth : authReducers,
    tracks : getTracksReducer,
    playback : playTrackReducer
})

const middleware = [thunk];

export const store = createStore(reducers, applyMiddleware(...middleware));
export type State = ReturnType<typeof reducers>

