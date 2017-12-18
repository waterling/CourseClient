import * as types from '../actions/action-types';


const initialState = {
    mapsLabelsList: []
};

const mapReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_MAP_LABEL_SUCCESS:
            return Object.assign({}, state, { mapsLabelsList: action.mapsLabelsList });
        default:
            return state;
    }
};

export default mapReducer;