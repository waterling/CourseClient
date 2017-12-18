import React, {Component} from 'react';
import * as charsApi from '../../../api/chars-api';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import UpdateChars from "./UpdateChars";

class ContainerUpdateChars extends Component {
    constructor(props) {
        super(props);
        this.updateChars = this.updateChars.bind(this);
    }

    componentWillUnmount() {
        charsApi.clearStoreChars();
    }

    componentDidMount() {
        if (this.props.charsId) {
            charsApi.getChar(this.props.charsId);
        }
    }

    render() {
        return (
            <div>
                {this.props.newsList.map(element => {
                    return (
                        <UpdateChars
                            charsId={element.id}
                            firstName={element.firstName}
                            secondName={element.secondName}
                            surname={element.surname}
                            imgURL={element.imgURL}
                            design={element.design}
                            updateChars={this.updateChars}/>
                    );
                })}
            </div>
        )
    }

    updateChars(chars) {
        charsApi.addChar(chars).then(data => {
            console.log(data);
        });
    }
}

const mapStateToProps = function (store) {
    return {
        charsList: store.charsState.charsList
    };
};

export default connect(mapStateToProps)(ContainerUpdateChars);
