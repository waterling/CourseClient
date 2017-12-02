import * as types from '../actions/action-types';


const initialState = {
    organizationsList: []
};

const organizationsReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_ORGANIZATIONS_SUCCESS:
            return Object.assign({}, state, { organizationsList: action.organizationsList });
        default:
            return state;
    }
};

export default organizationsReducer;