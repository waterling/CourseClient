import React from 'react';

import './FullNews.css'

// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/';

    return (
        props.news.map(item=>{
            return(
                <div key={item.id} className="fullstory_news">
                    <div dangerouslySetInnerHTML={{__html: item.content}}/>
                </div>
            );
        })
    )
}