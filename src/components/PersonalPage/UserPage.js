import React, {Component} from 'react';
import {Button, Divider} from "material-ui";
import * as cookie from "react-cookies";
import {Link} from "react-router-dom";
import {ProgressBar} from "react-bootstrap";
import * as seriesApi from "../../api/series-api";
import SeasonInfo from "./SeasonInfo";
import {connect} from "react-redux";

class UserPage extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        seriesApi.getAllSeriesForUser(cookie.load('user'));
    }

    updateHaveSeen(id){
        seriesApi.updateHaveSeen(id, cookie.load('user')).then(()=>{
            seriesApi.getAllSeriesForUser(cookie.load('user'));
        });
    }

    render() {
        let avatarURL;
        if (this.props.user) {
            avatarURL = this.props.user.avatarURL ? this.props.user.avatarURL : "default-avatar.jpg";
        } else {
            avatarURL = "default-avatar.jpg";
        }
        return (
            <div className="userContainer" style={{display: "flex"}}>
                <div className="userInfo" style={{display: "flex", flexDirection: "column"}}>
                    <img src={"/image/avatar/" + avatarURL}
                         style={{maxWidth: 200, maxHeight: 300, paddingRight: 10, paddingBottom: 10}}/>
                    <div style={{paddingRight: 10, paddingBottom: 10}}>
                        Welcome, {this.props.user ? this.props.user.name : "Registered Guest"}!
                    </div>
                    {this.props.isAdmin &&

                    <Button raised color="primary" style={{paddingRight: 10, paddingTop: 10}}>
                        <Link to={'/admin'}>
                            Панель админа
                        </Link>
                    </Button>


                    }
                    <br/>
                    <Button onClick={this.props.logout} raised color="primary"
                            style={{paddingRight: 10, paddingTop: 10}}>
                        Выйти
                    </Button>
                </div>

                <div className="user-info">
                    <div className="title"><h1>Просмотренные серии сериала</h1></div>
                    <Divider/>
                    <br/>

                    <SeasonInfo seriesList={this.props.seriesList} updateHaveSeen={this.updateHaveSeen}/>

                </div>

            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        seriesList: store.seriesState.seriesList
    };
};

export default connect(mapStateToProps)(UserPage);