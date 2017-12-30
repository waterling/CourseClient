import store from "../store";
import {apiPrefix, serverPort} from "../etc/config";
import {getUserSuccess} from "../actions/user-actions";
import axios from "axios/index";


export function getUser() {
    return axios.get(apiPrefix + ':' + serverPort + '/user/' + Date.now(), {withCredentials: true})
        .then(response => {
            if(response.data!=="Permission denied"){
                store.dispatch(getUserSuccess(response.data));
                console.log(response.data);
            }else{
                console.log("Permission denied");
            }
            return response.data;
        });
}
