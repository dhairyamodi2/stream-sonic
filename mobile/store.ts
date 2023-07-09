import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./modules/Auth/auth.reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
    auth : authReducers
})

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
export type State = ReturnType<typeof reducers>
