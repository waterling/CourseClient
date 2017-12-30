import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as seriesApi from '../../api/series-api';
import * as cookie from 'react-cookies';


import './Loader.css';
import FullSeries from "../OnlineSeries/FullSeries";
import {Divider} from "material-ui";

class FullSeriesContainer extends Component {
    constructor(props) {
        super(props);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
    }

    componentDidMount() {
        if (cookie.load('user')) {
            seriesApi.getSeriesForUser(this.props.id, cookie.load('user'));
        } else {
            seriesApi.getSeries(this.props.id)
        }
    }

    componentWillUnmount() {
        seriesApi.clearStoreSeries();
    }

    changeCurrentTime(sec, seriesID, duration) {
        (sec !== 0 && (Math.round(sec) % 10) === 0) ? seriesApi.updateCurrentTime(seriesID, cookie.load('user'), sec, (sec / duration) * 100, duration) : '';
    }

    render() {
        return (
            <div>
                {this.props.fullSeries.series?<div className="title"><h1>{this.props.fullSeries.series.numOfSer} серия {this.props.fullSeries.series.numOfSeazon} сезон</h1></div>
                    :''}<Divider/>
                <br/>
                <FullSeries series={this.props.fullSeries} numOfSeries={this.props.id}
                            changeCurrentTime={this.changeCurrentTime}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        fullSeries: store.fullSeriesState.fullSeries
    };
};

export default connect(mapStateToProps)(FullSeriesContainer);