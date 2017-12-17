import * as types from '../actions/action-types';


const initialState = {
    seriesList: []
};

const seriesReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_SERIES_SUCCESS:
            return Object.assign({}, state, { seriesList: action.seriesList });
        case types.CLEAR_SERIES:
            return initialState;
        default:
            return state;
    }
};

export default seriesReducer;