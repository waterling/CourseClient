import axios from 'axios';
import store from '../store';
import {apiPrefix} from '../etc/config.json';
import {serverPort} from '../etc/config.json';
import {getMapLabelSuccess} from "../actions/map-actions";



export function getAllLabels() {
    return axios.get(apiPrefix + ':' + serverPort + '/map/' + Date.now())
        .then(response => {
            console.log("Get All PlaceMark: "+JSON.stringify(response.data));
            store.dispatch(getMapLabelSuccess(response.data));
            return response.data;
        });
}
