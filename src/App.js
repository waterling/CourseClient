import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import './App.css';

const responseFacebook = (response) => {
    console.log(response);
}

class App extends Component {
    constructor(){
        super();
    }

    render() {

        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon={<TiSocialFacebookCircular />}
            />
        );
    }
}

export default App;
