import * as types from '../actions/action-types';


const initialState = {
    newsList: []
};

const newsReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_NEWS_SUCCESS:
            return Object.assign({}, state, { newsList: action.newsList });
        default:
            return state;
    }
};

export default newsReducer;