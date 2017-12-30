import * as types from '../actions/action-types';


const initialState = {
    user: []
};

const userReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_USER_SUCCESS:
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
};

export default userReducer;