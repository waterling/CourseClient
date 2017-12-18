import * as types from './action-types';

export function getMapLabelSuccess(mapsLabelsList) {
    return {
        type: types.GET_MAP_LABEL_SUCCESS,
        mapsLabelsList
    };
}