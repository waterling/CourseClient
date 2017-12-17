import * as types from './action-types';

export function getSeriesSuccess(seriesList) {
    return {
        type: types.GET_SERIES_SUCCESS,
        seriesList
    };
}
export function clearSeries() {
    return {
        type: types.CLEAR_SERIES
    }
}