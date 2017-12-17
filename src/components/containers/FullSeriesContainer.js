import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as seriesApi from '../../api/series-api';

import './Loader.css';
import FullSeries from "../OnlineSeries/FullSeries";

class FullSeriesContainer extends Component {

    componentDidMount(){
        seriesApi.getSeries(this.props.id);
    }
    componentWillUnmount(){
        // newsApi.clearStoreNews();
    }

    render() {
        console.log('tut');
        return (
            <div>
                <FullSeries series={this.props.seriesList} numOfSeries={this.props.id}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        seriesList: store.seriesState.seriesList
    };
};

export default connect(mapStateToProps)(FullSeriesContainer);