import { Dispatch } from "redux";
import { AuthActions, AuthState } from "./auth.types";
import { AUTH_FAIL, AUTH_REQ, AUTH_SUC, ONBOARDING_FAIL, ONBOARDING_REQ, ONBOARDING_SUC, SET_VISITED } from "../../constants";

export const authReducers = (state : AuthState = {
    visited: false, 
    isLoading: false, 
    isAuthenticated: false, 
    user: null, message: ''}, action: AuthActions) : AuthState => {
        switch(action.type) {
            case AUTH_REQ:
                return {
                    ...state,
                    isLoading: true,
                    visited: true
                }
            case AUTH_SUC:
                return {
                    ...state,
                    visited: true,
                    isLoading: false,
                    isAuthenticated: true,
                    user: action.payload.user,
                    message: action.payload.message
                }
            case AUTH_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    visited: true,
                    isAuthenticated: false,
                    user : null,
                    message: action.payload.message
                }
            case SET_VISITED:
                return {
                    ...state,
                    visited: false
                }
            case ONBOARDING_REQ:
                return {
                    ...state,
                    isLoading: true
                }
            case ONBOARDING_SUC:
                return {
                    ...state,
                    user : action.payload.user,
                    isLoading: false
                }
            case ONBOARDING_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    message: action.payload.message
                }
            default:
                return state
        }
}