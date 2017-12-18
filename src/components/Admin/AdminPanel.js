import {Component} from "react";
import * as React from "react"
import axios from 'axios';
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import {apiPrefix} from '../../etc/config.json';
import {serverPort} from '../../etc/config.json';
import * as cookie from "react-cookies";
export default class AdminPanel extends Component {
    state={
        show: false,
    };
    componentWillMount(){
        if (!cookie.load('user')) {
            this.props.history.push('/');
        }
        axios.get(`${apiPrefix}:${serverPort}/auth/isAdmin`, {withCredentials: true}).then(function (response) {
            if (response.data === 'Permission denied') {
                console.log("You're not admin");
                this.props.history.push('/');
            }
            console.log('update state');
            this.setState({
                show: true,
            })
        }.bind(this)).then(function (data) {

        }.bind(this)).catch(function (error) {
            console.log(error);
        });

    }
    render () {
        console.log(this.state.show);
        return(
            <div>
                {this.state.show && <div >
                    <Link to="/admin/news"><Button raised color="primary">Новости</Button></Link>
                    <Link to="/admin/chars"><Button raised color="primary">Персонажи</Button></Link>
                    <Link to="/admin/orgs"><Button raised color="primary">Организации</Button></Link>
                    <Button raised color="primary">Series</Button>
                </div> }
            </div>
        )
    }
}