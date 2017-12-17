import React, {Component} from 'react';
import * as newsApi from '../../api/news-api';

import '../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import UpdateNews from "./UpdateNews";

class AddNewsContainer extends Component {
    constructor(props){
        super(props);

    }

    componentWillUnmount(){
        newsApi.clearStoreNews();
    }
    componentDidMount(){
        if(this.props.newsId){
            newsApi.getNews(this.props.newsId);
        }
    }
    render () {
            return(
                <div>
                    {this.props.newsList.map(element=>{
                        return (
                            <UpdateNews newsId={element.id} title={element.title} imgURL={element.imgURL} design={element.design} updateNews={this.updateNews.bind(this)}/>
                        );
                    })}
                </div>
            )
    }
    updateNews(news){
        newsApi.addNews(news).then(data =>{
            console.log(data);
        });
    }
}
const mapStateToProps = function(store) {
    return {
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(AddNewsContainer);
