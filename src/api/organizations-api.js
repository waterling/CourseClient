import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {getOrganizationsSuccess, clearStoreOrganizations} from "../actions/organizations-actions";


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
/**
 * Get organization by id
 */

export function getOrganization(id) {
    return axios.get(apiPrefix + ':' + serverPort + '/org/' + Date.now() + '?id=' + id)
        .then(response => {
            store.dispatch(getOrganizationsSuccess(response.data));
            return response.data;
        });
}

export function addOrg(org) {
    return axios.post(apiPrefix + ':' + serverPort + '/orgs/admin/' + Date.now(),org);
}

export function deleteOrg(id) {
    return axios.delete(apiPrefix + ':' + serverPort + '/orgs/admin/' + Date.now()+ '?id=' + id)
}

export function clearOrganizations() {
    store.dispatch(clearStoreOrganizations());
}