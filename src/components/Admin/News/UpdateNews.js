import React, {Component} from 'react';
import * as newsApi from '../../../api/news-api';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import XHRUploader from 'react-xhr-uploader'
import {apiPrefix} from '../../../etc/config.json';
import {serverPort} from '../../../etc/config.json';

class UpdateNews extends Component {
    constructor(props){
        super(props);
            this.state={
                title: props.title,
                imgURL: props.imgURL,
                shortText: props.shortText,
                pictures: []
            };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(picture);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
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
                <XHRUploader
                    url={apiPrefix + ':' + serverPort+'/news/uploadfile'}
                    auto
                />
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
            </div>

        )
    }
    onLoad=()=>{
        this.editor.loadDesign(JSON.parse(this.props.design));
    };
    exportHtml = () => {
        this.editor.exportHtml(data => {
            const {design, html} = data;
            let news = {
                id: this.props.newsId,
                title: this.state.title,
                shortText: this.state.shortText,
                content: html,
                design: JSON.stringify(design),
                imgURL: this.state.imgURL
            };
            this.props.updateNews(news);
        });
    }
}

export default UpdateNews;
