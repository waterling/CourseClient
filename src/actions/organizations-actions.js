import * as types from './action-types';

export function getOrganizationsSuccess(organizationsList) {
    return {
        type: types.GET_ORGANIZATIONS_SUCCESS,
        organizationsList
    };
}

export function clearStoreOrganizations() {
    return{
        type: types.CLEAR_ORGANIZATIONS,
    }
}