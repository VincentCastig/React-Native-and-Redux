import { 
    EMPLOYEE_UPDATE
} from '../actions/Types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            //[action.payload.prop] is js6 key interperlation
            console.log('ok in update');
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
