import * as types from './action-types';

export function getFullSeriesSuccess(fullSeries) {
    return {
        type: types.GET_FULL_SERIES_SUCCESS,
        fullSeries
    };
}