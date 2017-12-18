import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as mapApi from '../../api/map-api';
import YandexMap from "../Map/YandexMap";

class MapContainer extends Component {
    constructor(){
        super();
    }

    componentWillMount(){

    }

    componentDidMount(){
        mapApi.getAllLabels();
    }

    render() {
        return (
            <div>
                <YandexMap labelsList={this.props.mapsLabelsList}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        mapsLabelsList: store.mapState.mapsLabelsList
    };
};

export default connect(mapStateToProps)(MapContainer);