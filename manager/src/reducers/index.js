import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeForm from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeForm,
    employees: EmployeeReducer
});
