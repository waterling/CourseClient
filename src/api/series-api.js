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
export function getSeasonForUser(num, uid) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?numOfSeason=' + num+'&uid=' + uid)
        .then(response => {
            store.dispatch(getSeriesSuccess(response.data));
            console.log('User: ' + JSON.stringify(response.data));
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
export function getAllSeriesForUser(uid) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?uid=' + uid)
        .then(response => {
            store.dispatch(getSeriesSuccess(response.data));
            return response.data;
        });
}

export function updateCurrentTime(id, uid, time, fluid, duration) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?id=' + id + "&uid=" + uid + "&time=" + time+ "&fluid=" + fluid+ "&duration=" + duration)
        .then(response => {
            console.log(response);
            return response.data;
        });
}
export function updateHaveSeen(id, uid) {
    return axios.get(apiPrefix + ':' + serverPort + '/online/' + Date.now() + '?id=' + id + "&uid=" + uid + "&haveSeen=" + true)
        .then(response => {
            console.log(response);
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