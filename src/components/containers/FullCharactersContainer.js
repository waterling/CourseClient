import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as charsApi from '../../api/chars-api';

import './Loader.css';
import FullChars from "../Character/FullChars";

class FullCharactersContainer extends Component {

    componentDidMount(){
        charsApi.getChar(this.props.id)
    }
    componentWillUnmount(){
        console.log("Unmount");
        charsApi.clearStoreChars();
    }

    render() {
        return (
            <div>
                <FullChars char={this.props.charsList} numOfChar={this.props.id}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        charsList: store.charsState.charsList
    };
};

export default connect(mapStateToProps)(FullCharactersContainer);