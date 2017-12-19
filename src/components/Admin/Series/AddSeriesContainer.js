import React, {Component} from 'react';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {TextField} from "material-ui";
import XHRUploader from 'react-xhr-uploader'
import {apiPrefix} from '../../../etc/config.json';
import {serverPort} from '../../../etc/config.json';
import * as seriesApi from "../../../api/series-api";

class AddSeriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfSeazon: props.numOfSeazon,
            numOfSer: props.numOfSer,
            src: props.src,
            imgURL: props.imgURL,
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

    render() {
        return (
            <div>
                <TextField
                    label="Номер сезона"
                    placeholder="Номер сезона"
                    margin="normal"
                    value={this.state.numOfSeazon}
                    onChange={this.handleChange('numOfSeazon')}
                />
                <br/>
                <TextField
                    label="Номер серии"
                    placeholder="Номер серии"
                    margin="normal"
                    value={this.state.numOfSer}
                    onChange={this.handleChange('numOfSer')}
                />
                <br/>
                <TextField
                    label="Ccылка на видео"
                    placeholder="Ссылка на видео"
                    margin="normal"
                    value={this.state.src}
                    onChange={this.handleChange('src')}
                />
                <br/>
                <XHRUploader
                    url={apiPrefix + ':' + serverPort + '/online/uploadfile'}
                    auto
                />

                <EmailEditor
                    ref={editor => this.editor = editor}
                />
                <button onClick={this.exportHtml}>Сохранить изменения</button>
            </div>
        )
    }

    exportHtml = () => {
        this.editor.exportHtml(data => {
            const {design, html} = data;
            let series = {
                numOfSeazon: this.state.numOfSeazon,
                numOfSer: this.state.numOfSer,
                src: this.state.src,
                about: html,
                design: JSON.stringify(design),
                imgURL: this.state.imgURL
            };
            seriesApi.addSeries(series);
        });
    }
}

export default AddSeriesContainer;
