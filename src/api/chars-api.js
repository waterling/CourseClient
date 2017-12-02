import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {getCharsSuccess} from "../actions/chars-actions";

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