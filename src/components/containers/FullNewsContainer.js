import React, {Component} from 'react';
import { connect } from 'react-redux';
import FullNews from '../News/FullNews';
import * as newsApi from '../../api/news-api';

import './Loader.css';

class FullNewsContainer extends Component {

    componentDidMount(){
        newsApi.getNews(this.props.id)
    }

    render() {
        return (
            <div>
                <FullNews news={this.props.newsList} numOfNews={this.props.id}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(FullNewsContainer);