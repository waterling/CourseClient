import { combineReducers } from 'redux';


// Reducers
import newsReducer from './news-reducer';
import charsReducer from './chars-reducer';
import seriesReducer from "./series-reducer";


// Combine Reducers
const reducers = combineReducers({
    newsState: newsReducer,
    charsState: charsReducer,
    seriesState: seriesReducer
});

export default reducers;