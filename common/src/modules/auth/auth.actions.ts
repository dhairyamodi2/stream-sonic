import { completeProfile, getMe } from 'client/src/modules/user/client';
import { Dispatch } from 'redux';
import { AuthActions } from './auth.types';


import { AUTH_FAIL, AUTH_REQ, AUTH_SUC, ONBOARDING_FAIL, ONBOARDING_REQ, ONBOARDING_SUC, SET_VISITED } from '../../constants';

export const me = function (token: string) {
    return async function (dispatch: Dispatch<AuthActions>) {
        console.log('within actions')

        dispatch({
            type: AUTH_REQ,
            payload: { user: null, message: "Loading" }
        })
        const {message, data} = await getMe(token);


        if (!data) {
            dispatch({
                type: AUTH_FAIL,
                payload: {user: null, message: message}
            })
            return;
        }

        dispatch({
            type: AUTH_SUC,
            payload: {user: data, message}
        })
    }
}

export const setVisited = function() {
    return function(dispatch : Dispatch<AuthActions>) {
        dispatch({
            type : SET_VISITED,
            payload: {user : null, message: ''}
        })
    }
}


export const onboarding = function ({birthDate, token} : {birthDate : Date, token : string}) {
    return async function (dispatch : Dispatch<AuthActions>) {
        dispatch({
            type : ONBOARDING_REQ,
            payload: {user : null, message : ''}
        })
        const {message, data} = await completeProfile(birthDate, token);
        if (!data || data.completedProfile === false) {
            dispatch({
                type: ONBOARDING_FAIL,
                payload: {user : null, message}
            });
            return
        }
        dispatch({
            type: ONBOARDING_SUC,
            payload: {user : data, message}
        })
        
    }
}