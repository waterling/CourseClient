import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewSeriesList from '../OnlineSeries/NewSeries';
import * as seriesApi from '../../api/series-api';

import './Loader.css';

class SeriesListContainer extends Component {

    componentDidMount(){
        seriesApi.getSeason(this.props.numOfSeason)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        seriesApi.getSeason(this.props.numOfSeason)
    }

    render() {
        return (
            <div>
                <NewSeriesList seriesList={this.props.seriesList} numOfSeason={this.props.numOfSeason}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        seriesList: store.seriesState.seriesList
    };
};

export default connect(mapStateToProps)(SeriesListContainer);