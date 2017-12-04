import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {clearNews, getNewsSuccess} from '../actions/news-actions';

/**
 * Get users with offset
 */

export function getNewsWithOffsetPages(num) {
    return axios.get(apiPrefix + ':' + serverPort + '/news/' + Date.now() + '?count=' + 10 + '&offset=' + 10 * num)
        .then(response => {
            store.dispatch(getNewsSuccess(response.data));
            return response.data;
        });
}
/**
 * Get users with offset
 */

export function getLastNews(count) {
    console.log(apiPrefix + ':' + serverPort + '/news/' + Date.now() + '?count=' + count);
    return axios.get(apiPrefix + ':' + serverPort + '/news/' + Date.now() + '?count=' + count)
        .then(response => {
            store.dispatch(getNewsSuccess(response.data));
            return response.data;
        });
}
/**
 * Get news by id
 */

export function getNews(id) {
    console.log(apiPrefix + ':' + serverPort + '/news/' + Date.now() + '?id=' + id);
    return axios.get(apiPrefix + ':' + serverPort + '/news/' + Date.now() + '?id=' + id)
        .then(response => {
            store.dispatch(getNewsSuccess(response.data));
            console.log(response.data);
            return response.data;
        });
}
export function clearStoreNews() {
    store.dispatch(clearNews());
}