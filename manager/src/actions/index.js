import { EMAIL_CHANGED } from './Types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
