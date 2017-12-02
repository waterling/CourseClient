import React, {Component} from 'react';
import { connect } from 'react-redux';
import ShortChars from '../Character/ShortChars';
import InfiniteScroll from 'react-infinite-scroller';
import * as charsApi from '../../api/chars-api';
import './Loader.css';

class CharsListContainer extends Component {
    constructor(){
        super();
        this.state ={
            items: [],
            hasMore: true
        };
    }

    loadNews (page){
        charsApi.getCharsWithOffsetPages(page).then(data=>{
            if(!(data.length)){
                this.setState({hasMore: false});
            }
        })

    }

    render() {
        let key = this.state.items.length;
        this.state.items.push(<ShortChars charsList={this.props.charsList} key={key}/>);
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
                    <div className="ITEMS">
                        {this.state.items}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        charsList: store.charsState.charsList
    };
};

export default connect(mapStateToProps)(CharsListContainer);