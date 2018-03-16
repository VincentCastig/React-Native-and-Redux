import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
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