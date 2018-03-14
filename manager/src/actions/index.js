import { EMAIL_CHANGED } from './Types';

export const emailChange = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}
