import React, {Component} from 'react';
import * as newsApi from '../../../api/news-api';
import {Redirect} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

class DeleteNews extends Component {
    constructor(props){
        super(props);
        this.state={
            data: ""
        }
    }

    componentDidMount(){
        console.log(this.props);
        newsApi.deleteNews(this.props.id).then(function(data){

           this.props.notify(data.data.status)
        }.bind(this));
    }
    render () {
        return(
            <div>
                <ToastContainer />

                <Redirect to={{
                    pathname: '/admin/news',
                    state: { from: this.props.location }
                }}/>
            </div>

        )
    }
}

export default DeleteNews;
