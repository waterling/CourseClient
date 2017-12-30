import {Component} from "react";
import * as React from "react"
import axios from 'axios';
import {Button} from "material-ui";
import {Link, Route} from "react-router-dom";
import {apiPrefix} from '../../etc/config.json';
import {serverPort} from '../../etc/config.json';
import * as cookie from "react-cookies";
import AddNewsContainer from "./News/AddNewsContainer";
import AdminNewsPanel from "./News/AdminNewsPanel";


const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);

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
        let section;
        console.log(this.props.match);
        switch(this.props.match.params.section){
            case 'news':
                section=<AdminNewsPanel history={this.props.history}/>;
                break;
        }

        console.log(this.state.show);
        return(
            <div style={{}}>
                {this.state.show && <div style={{display: 'flex'}} >
                    <div style={{display: 'flex',flexDirection: 'column', marginRight: '15px', minWidth: '140px', marginTop: '10px', position: 'fixed'}}>
                        <Link to="/admin/news"><Button raised color="primary" style={{minWidth: '140px'}}>Новости</Button></Link>
                        <br/>
                        <Link to="/admin/chars"><Button raised color="primary" style={{minWidth: '140px'}}>Персонажи</Button></Link>
                        <br/>
                        <Link to="/admin/orgs"><Button raised color="primary" style={{minWidth: '140px'}}>Организации</Button></Link>
                        <br/>
                        <Link to="/admin/online"><Button raised color="primary" style={{minWidth: '140px'}}>Серии онлайн</Button></Link>
                    </div>
                    <div style={{marginLeft: '160px'}}>
                        {this.props.routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}

                    </div>
                </div> }
            </div>
        )
    }
}