import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeForm from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeForm
});
