import React from 'react';

import './FullChars.css'

export default function(props) {
    let link=__dirname+'resources/';

    return (
        props.char.map(item=>{
            return(
                <div key={item.id} className="fullstory_chars">
                    <div dangerouslySetInnerHTML={{__html: item.about}}/>
                </div>
            );
        })
    )
}