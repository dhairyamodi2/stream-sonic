import { Dispatch } from "redux";
import { AuthActions, AuthState } from "./auth.types";
import { AUTH_FAIL, AUTH_REQ, AUTH_SUC } from "../../constants";

export const authReducers = (state : AuthState = {
    visited: false, 
    isLoading: false, 
    isAuthenticated: false, 
    user: null, message: ''}, action: AuthActions) : AuthState => {
        switch(action.type) {
            case AUTH_REQ:
                return {
                    ...state,
                    visited: true
                }
            case AUTH_SUC:
                return {
                    ...state,
                    visited: true,
                    isAuthenticated: true,
                    user: action.payload.user,
                    message: action.payload.message
                }
            case AUTH_FAIL:
                return {
                    ...state,
                    visited: true,
                    isAuthenticated: false,
                    user : null,
                    message: action.payload.message
                }
            default:
                return state
        }
}