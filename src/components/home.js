import React from 'react';
import * as newsApi from '../api/news-api';
import * as seriesApi from '../api/series-api';
import {connect} from "react-redux";
import ShortNews from './News/ShortNews';
import NewSeries from './OnlineSeries/NewSeries';
import './home.css';



class Home extends React.Component {
    componentDidMount(){
        newsApi.getLastNews(3);
        seriesApi.getLastSeries(3);
    }
    componentWillUnmount(){
        newsApi.clearStoreNews();
    }

    render() {
        return (
            <div className="home">
                <div className="title">
                    <h1>Последние добавленные серии</h1>
                </div>
                {/*<div className="new_series_block">*/}
                    <NewSeries seriesList={this.props.seriesList}/>
                {/*</div>*/}
                <div className="title_2">
                    <h2>Новости сериала</h2>
                </div>
                <ShortNews newsList={this.props.newsList}/>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        seriesList: store.seriesState.seriesList,
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(Home);
