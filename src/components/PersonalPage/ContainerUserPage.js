import React, {Component} from 'react';
import {Button} from "material-ui";
import * as cookie from "react-cookies";
import UserPage from "./UserPage";
import * as userApi from "../../api/user-api";
import {connect} from "react-redux";
import {apiPrefix, serverPort} from "../../etc/config";
import axios from "axios/index";

class ContainerUserPage extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);

    }
    state={
        isAdmin: false,
    };
    componentWillMount(){
        if (!cookie.load('user')) {
            this.props.history.push('/login');
        }
        axios.get(`${apiPrefix}:${serverPort}/auth/isAdmin`, {withCredentials: true}).then(function (response) {
            if (response.data !== 'Permission denied') {
                this.setState({
                    isAdmin: true,
                })
            }
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
        userApi.getUser(cookie.load('user'));
    }

    logout(){
        cookie.remove('user');
        this.props.history.push('/');
    }
    render() {
        return (
            <UserPage user={this.props.user} isAdmin={this.state.isAdmin} logout={this.logout}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(ContainerUserPage);