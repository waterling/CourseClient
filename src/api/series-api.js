import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {clearSeries, getSeriesSuccess} from "../actions/series-actions";
import {getFullSeriesSuccess} from "../actions/fullseries-actions";

/**
 * Get chars with offset
 */

export function getLastSeries(count) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?count=' + count)
        .then(response => {
            store.dispatch(getSeriesSuccess(response.data));
            return response.data;
        });
}

export function getSeason(num) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?numOfSeason=' + num)
        .then(response => {
            store.dispatch(getSeriesSuccess(response.data));
            return response.data;
        });
}

export function getSeries(id) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?id=' + id)
        .then(response => {
            store.dispatch(getFullSeriesSuccess(response.data));
            return response.data;
        });
}

export function getSeriesForUser(id, uid) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?id=' + id + "&uid=" + uid)
        .then(response => {
            store.dispatch(getFullSeriesSuccess(response.data));
            return response.data;
        });
}

export function updateCurrentTime(id, uid, time) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?id=' + id + "&uid=" + uid + "&time=" + time)
        .then(response => {
            return response.data;
        });
}

export function clearStoreSeries() {
    store.dispatch(clearSeries());
}

export function addSeries(series) {
    return axios.post(apiPrefix + ':' + serverPort + '/online/admin/' + Date.now(), series);
}

export function deleteNews(id) {
    return axios.delete(apiPrefix + ':' + serverPort + '/online/admin/' + Date.now() + '?id=' + id)
}