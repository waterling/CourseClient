import React, {Component} from 'react';
import * as newsApi from '../../api/news-api';

class DeleteNews extends Component {
    constructor(props){
        super(props);
        this.state={
            data: ""
        }
    }

    componentDidMount(){
        newsApi.deleteNews(this.props.id).then(function(data){
            console.log(data);
            alert(data.data);
        }.bind(this));
    }
    render () {
        return(
            <div>

            </div>
        )
    }
}

export default DeleteNews;
