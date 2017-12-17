import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as seriesApi from '../../api/series-api';
import * as cookie from 'react-cookies';


import './Loader.css';
import FullSeries from "../OnlineSeries/FullSeries";

class FullSeriesContainer extends Component {
    constructor(props){
        super(props);
        this.changeCurrentTime=this.changeCurrentTime.bind(this);
    }
    componentDidMount(){
        if(cookie.load('user')){
            seriesApi.getSeriesForUser(this.props.id, cookie.load('user'));
        }else{
            seriesApi.getSeries(this.props.id)
        }
    }
    componentWillUnmount(){
        // newsApi.clearStoreNews();
    }
    changeCurrentTime(sec,seriesID){
        (sec!==0 && (Math.round(sec)%10)===0)? seriesApi.updateCurrentTime(seriesID, cookie.load('user'),sec):'';
    }

    render() {
        return (
            <div>
                <FullSeries series={this.props.seriesList} numOfSeries={this.props.id} changeCurrentTime={this.changeCurrentTime}/>
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