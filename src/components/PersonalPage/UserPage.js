import React, {Component} from 'react';
import {Button} from "material-ui";
import * as cookie from "react-cookies";

class UserPage extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);

    }
    componentWillMount(){
        if (!cookie.load('user')) {
            this.props.history.push('/login');
        }
    }

    logout(){
        cookie.remove('user');
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="userContainer" style={{display: "flex"}}>
                <div className="userInfo" style={{display: "flex", flexDirection:"column"}}>
                    <img src={"/image/default-avatar.jpg"} style={{maxWidth:200, maxHeight: 300, paddingRight: 10, paddingBottom:10}}/>
                    <Button onClick={this.logout} raised color="primary">
                        Выйти
                    </Button>
                </div>

                <div>
                    Просмотренные серии
                </div>

            </div>
        );
    }
}

export default UserPage;