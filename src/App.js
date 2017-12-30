import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {ProgressBar} from "react-bootstrap";

class App extends Component {
    notify = () => toast("Wow so easy !");

    render(){
        return (
            <div>
                <ProgressBar active now={61} />
            </div>
        );
    }
}

export default App;