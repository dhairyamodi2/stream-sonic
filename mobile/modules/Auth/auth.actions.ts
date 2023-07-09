import { getMe } from 'client/src/modules/user/client';
import { Dispatch } from 'redux';
import { AuthActions } from './auth.types';
import { AUTH_FAIL, AUTH_REQ, AUTH_SUC } from '../../constants';

export const me = function (token: string) {
    return function (dispatch: Dispatch<AuthActions>) {
        console.log('within actions')

        dispatch({
            type: AUTH_REQ,
            payload: { user: null, message: "Loading" }
        })
        // getMe(token).then((data) => {
        //     const { user, message } = data;
        //     if (!user) {
        //         dispatch({
        //             type: AUTH_FAIL,
        //             payload: { user: null, message }
        //         });
        //         return;
        //     }
        //     dispatch({
        //         type: AUTH_SUC,
        //         payload: { user: user, message: message }
        //     })
        // }).catch((err) => {
        //     console.log(err)
        // })




    }
}