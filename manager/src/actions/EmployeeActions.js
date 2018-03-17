import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE
} from './Types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            //{ type: 'reset' }
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList();
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    console.log('employee', currentUser);
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            console.log('snapshot', snapshot.val());
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.main({ type: 'reset' });   
        });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.main({ type: 'reset' });   
        });
    };
};
