import { combineReducers } from 'redux';


// Reducers
import newsReducer from './news-reducer';
import charsReducer from './chars-reducer';
import seriesReducer from "./series-reducer";
import organizationsReducer from "./organizations-reducer";
import fullSeriesReducer from "./fullseries-reducer";
import mapReducer from "./map-reducer";


// Combine Reducers
const reducers = combineReducers({
    newsState: newsReducer,
    charsState: charsReducer,
    seriesState: seriesReducer,
    organizationsState: organizationsReducer,
    fullSeriesState: fullSeriesReducer,
    mapState: mapReducer
});

export default reducers;