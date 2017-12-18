import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {clearChars, getCharsSuccess} from "../actions/chars-actions";
import {clearNews, getNewsSuccess} from "../actions/news-actions";

/**
 * Get chars with offset
 */

export function getCharsWithOffsetPages(num) {
    return axios.get(apiPrefix + ':' + serverPort + '/chars/' + Date.now() + '?count=' + 3 + '&offset=' + 3 * num)
        .then(response => {
            store.dispatch(getCharsSuccess(response.data));
            return response.data;
        });
}

export function getChar(id) {
    console.log(apiPrefix + ':' + serverPort + '/chars/' + Date.now() + '?id=' + id);
    return axios.get(apiPrefix + ':' + serverPort + '/chars/' + Date.now() + '?id=' + id)
        .then(response => {
            store.dispatch(getCharsSuccess(response.data));
            console.log(response.data);
            return response.data;
        });
}

export function addChar(char) {
    return axios.post(apiPrefix + ':' + serverPort + '/chars/admin/' + Date.now(),char);
}

export function deleteChar(id) {
    return axios.delete(apiPrefix + ':' + serverPort + '/chars/admin/' + Date.now()+ '?id=' + id)
}

export function clearStoreChars() {
    store.dispatch(clearChars());
}