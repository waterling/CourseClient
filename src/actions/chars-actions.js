import * as types from './action-types';

export function getCharsSuccess(charsList) {
    return {
        type: types.GET_CHARS_SUCCESS,
        charsList
    };
}
export function clearChars() {
    return {
        type: types.CLEAR_CHARS
    }
}