import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewSeriesList from '../OnlineSeries/NewSeries';
import * as seriesApi from '../../api/series-api';
import * as cookie from 'react-cookies';

import './Loader.css';
import {Divider} from "material-ui";

class SeriesListContainer extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        seriesApi.clearStoreSeries();

    }
    componentDidMount(){
        seriesApi.clearStoreSeries();
        if(cookie.load('user')){
            seriesApi.getSeasonForUser(this.props.numOfSeason, cookie.load('user'));
        }else{
            seriesApi.getSeason(this.props.numOfSeason)
        }
    }

    render() {
        return (
            <div>
                <div className="title"><h1>Мистер Робот ({this.props.numOfSeason} сезон)</h1></div>
                <Divider/>
                <br/>
                <NewSeriesList progress={true} link={'/online/series/'} seriesList={this.props.seriesList} numOfSeason={this.props.numOfSeason}/>
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