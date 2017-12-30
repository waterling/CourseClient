import React, {Component} from 'react';
import * as newsApi from '../../../api/news-api';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import { ToastContainer, toast } from 'react-toastify';
import {apiPrefix} from '../../../etc/config.json';
import {serverPort} from '../../../etc/config.json';

class AddNewsContainer extends Component {
    constructor(props){
        super(props);
        // this.updateState=this.updateState.bind(this);
        if (props.newsList.pop()){
            this.state={
                title: props.newsList[0].title,
                imgURL: "",
                shortText: ""
            };
        }else{
            this.state={
                title: '',
                imgURL: "",
                shortText: ""
            };
        }
    }

    notify=(text,type)=>{
        switch (type){
            case 'SUCCESS':
                toast.success(text,{
                    position: toast.POSITION.TOP_RIGHT
                });
                break;
            case 'ERROR':
                toast.error(text,{
                    position: toast.POSITION.TOP_RIGHT
                });
                break;
            default:
                toast("Default",{
                    position: toast.POSITION.TOP_RIGHT
                });

        }
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    componentWillUnmount(){
        newsApi.clearStoreNews();
    }
    componentDidMount(){
        if(this.props.newsId){
            newsApi.getNews(this.props.newsId).then(data=>{
                return data;
            }).then(function(data){
                this.props.newsList.map(element=>{
                    console.log(JSON.parse(element.design));
                    console.log(element);
                    console.log("State Title: "+JSON.stringify(element.title));
                });
                this.updateState();
            }.bind(this));
        }
    }
    render () {
        return(
            <div >
                <TextField
                    label="Заголовок"
                    placeholder="Заголовок"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                />
                <br/>
                <TextField
                    label="Картинка"
                    placeholder="URL картинки"
                    margin="normal"
                    value={this.state.imgURL}
                    onChange={this.handleChange('imgURL')}
                />
                <br/>
                <TextField
                    label="Краткое описание"
                    placeholder="Краткое описание"
                    multiline
                    margin="normal"
                    value={this.state.shortText}
                    onChange={this.handleChange('shortText')}
                />

                <EmailEditor
                    ref={editor => this.editor = editor}
                    onLoad={this.onLoad}
                />
                <button onClick={this.exportHtml}>Export HTML</button>
                <button onClick={this.notify}>Export HTML</button>
                {/*<ToastContainer/>*/}
            </div>

        )
    }
    onLoad=()=>{
        this.props.newsList.map(element=>{
            this.editor.loadDesign(JSON.parse(element.design));
        });
    };
    exportHtml = () => {
        this.editor.exportHtml(data => {
            const {design, html} = data;
            let news = {
                title: this.state.title,
                shortText: this.state.shortText,
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
                console.log("Response: ", data.data.status);
                this.notify(data.data.status,'SUCCESS');
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
