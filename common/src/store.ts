import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./modules/auth/auth.reducers";



const reducers = combineReducers({
    auth : authReducers
})

const middleware = [thunk];

export const store = createStore(reducers, applyMiddleware(...middleware));
export type State = ReturnType<typeof reducers>

