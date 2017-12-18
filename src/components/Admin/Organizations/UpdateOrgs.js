import React, {Component} from 'react';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {TextField} from "material-ui";
import XHRUploader from 'react-xhr-uploader'
import {apiPrefix} from '../../../etc/config.json';
import {serverPort} from '../../../etc/config.json';
import * as orgsApi from '../../../api/organizations-api'

class UpdateOrgs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
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
                    label="Название организации"
                    placeholder="Название организации"
                    margin="normal"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
                <br/>
                <XHRUploader
                    url={apiPrefix + ':' + serverPort + '/orgs/uploadfile'}
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
            let org = {
                id: this.props.orgId,
                name: this.state.name,
                about: html,
                design: JSON.stringify(design),
                imgURL: this.state.imgURL
            };
            orgsApi.addOrg(org);
        });
    }
}

export default UpdateOrgs;
