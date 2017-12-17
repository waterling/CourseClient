import * as types from '../actions/action-types';


const initialState = {
    fullSeries: []
};

const fullSeriesReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_FULL_SERIES_SUCCESS:
            return Object.assign({}, state, { fullSeries: action.fullSeries });
        default:
            return state;
    }
};

export default fullSeriesReducer;