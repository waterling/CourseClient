import React, {Component} from 'react';
import { connect } from 'react-redux';
import ShortNews from '../News/ShortNews';
import InfiniteScroll from 'react-infinite-scroller';
import * as newsApi from '../../api/news-api';
import './Loader.css';

class UpdateNewsContainer extends Component {
    constructor(){
        super();
        this.state ={
            items: [],
            hasMore: true
        };
    }


    componentDidMount(){
        this.setState({items:[]})
    }
    componentWillMount(){
        this.setState({items:[]})
    }
    loadNews (page){
        newsApi.getNewsWithOffsetPages(page).then(data=>{
            if(!(data.length)){
                this.setState({hasMore: false});
            }
        })

    }

    render() {
        let key = this.state.items.length;
        this.state.items.push(<ShortNews newsList={this.props.newsList} key={key} textButtons={'Edit'} link={'/admin/news/updateNews/'}/>);
        return (
            <div>
                <InfiniteScroll
                    pageStart={-1}
                    loadMore={this.loadNews.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader">
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>}
                >
                    <div className="items">
                        {this.state.items}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(UpdateNewsContainer);