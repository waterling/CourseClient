import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Loader.css';
import * as organizationsApi from "../../../api/organizations-api";
import NewSeriesList from '../../OnlineSeries/NewSeries';
import * as seriesApi from "../../../api/series-api";

class ListSeriesForUpdateContainer extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        seriesApi.clearStoreSeries();

    }
    componentDidMount(){
        seriesApi.clearStoreSeries();
        seriesApi.getSeason(this.props.numOfSeason)

    }

    render() {
        return (
            <div>
                <NewSeriesList link={'/admin/online/update/'} seriesList={this.props.seriesList} numOfSeason={this.props.numOfSeason}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        seriesList: store.seriesState.seriesList
    };
};

export default connect(mapStateToProps)(ListSeriesForUpdateContainer);