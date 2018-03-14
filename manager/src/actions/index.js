import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './Types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const loginUser = ({ email, password }) => {
    //Our action creator returns a function
    return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            //create and manually dispatch our action
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        });
    };
};
