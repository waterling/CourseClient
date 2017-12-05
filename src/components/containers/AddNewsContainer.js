import React, {Component} from 'react';
import * as newsApi from '../../api/news-api';

import './Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";

class AddNewsContainer extends Component {
    componentWillUnmount(){
        newsApi.clearStoreNews();
    }
    render () {
        return(
            <div style={{zIndex: 99999999999}}>
                <button onClick={this.exportHtml}>Export HTML</button>
                <EmailEditor
                    ref={editor => this.editor = editor}
                    onLoad={this.onLoad}
                />
            </div>

        )
    }
    onLoad=()=>{
        if(this.props.newsId){
            newsApi.getNews(this.props.newsId).then(data=>{

                    console.log(this.props.newsList);
                    this.editor.loadDesign(JSON.parse(this.props.newsList.pop().design))

            });
        }
    };
    exportHtml = () => {
        this.editor.exportHtml(data => {
            const {design, html} = data;
            let news = {
                title: 'Добавленная новость',
                content: html,
                design: JSON.stringify(design),
                imgURL: '1.png'
            };
            if(this.props.newsId){
                news.id=this.props.newsId;
                news.imgURL=undefined;
                news.title=undefined;
                console.log(news);
            }
            newsApi.addNews(news).then(data =>{
                console.log(data);
            });
        });
    }
}
const mapStateToProps = function(store) {
    return {
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(AddNewsContainer);
