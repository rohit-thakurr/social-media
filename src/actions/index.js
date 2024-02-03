

import {auth,provider} from "../firebase";
import { SET_USER } from "./actionType";

export const setuser = (payload) => ( {
    type: SET_USER,
    user: payload,
})


export function signInAPI() {

    return(dispatch) => {

        auth.signInWithPopup(provider).
        then((payload) =>{
            dispatch(setuser(payload.user));
        }).catch( (error) => alert( error.message));
    };
}

export function getUserAuth(){
    return (dispatch) => {
        auth.onAuthStateChange(async(user) =>{
            if( user ){
                dispatch ( setuser(user));
            }
        })
    }
}

export function signOutAPI() {
    
    return (dispatch) => {
        auth.signOut().then( () => {
            dispatch(setuser(null));
        }).catch((error) => {
            console.log( error.message);
        });
    };
}


