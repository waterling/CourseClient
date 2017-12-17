import * as types from '../actions/action-types';


const initialState = {
    charsList: []
};

const charsReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_CHARS_SUCCESS:
            return Object.assign({}, state, { charsList: action.charsList });
        case types.CLEAR_CHARS:
            console.log("Cleare store")
            return Object.assign({}, state, { charsList: [] });
        default:
            return state;
    }
};

export default charsReducer;