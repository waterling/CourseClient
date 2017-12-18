import React, {Component} from 'react';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {TextField} from "material-ui";
import XHRUploader from 'react-xhr-uploader'
import {apiPrefix} from '../../../etc/config.json';
import {serverPort} from '../../../etc/config.json';
import * as charsApi from '../../../api/chars-api'

class UpdateChars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            secondName: props.secondName,
            surname: props.surname,
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

    render() {
        return (
            <div>
                <TextField
                    label="Имя"
                    placeholder="Имя"
                    margin="normal"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                />
                <TextField
                    label="Второе имя"
                    placeholder="Второе имя"
                    margin="normal"
                    value={this.state.secondName}
                    onChange={this.handleChange('secondName')}
                />
                <TextField
                    label="Фамилия"
                    placeholder="Фамилия"
                    margin="normal"
                    value={this.state.surname}
                    onChange={this.handleChange('surname')}
                />
                <br/>
                <XHRUploader
                    url={apiPrefix + ':' + serverPort + '/chars/uploadfile'}
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
            let chars = {
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                surname: this.state.surname,
                about: html,
                design: JSON.stringify(design),
                imgURL: this.state.imgURL
            };
            charsApi.addChar(chars);
        });
    }
}

export default UpdateChars;
