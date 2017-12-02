import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {getOrganizationsSuccess} from "../actions/organizations-actions";


/**
 * Get All organizations
 */

export function getAllOrganizations() {
    return axios.get(apiPrefix + ':' + serverPort + '/org/' + Date.now())
        .then(response => {
            store.dispatch(getOrganizationsSuccess(response.data));
            return response.data;
        });
}