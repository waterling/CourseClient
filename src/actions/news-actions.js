import * as types from './action-types';

export function getNewsSuccess(newsList) {
    return {
        type: types.GET_NEWS_SUCCESS,
        newsList
    };
}

export function clearNews() {
    return {
        type: types.CLEAR_NEWS
    }
}