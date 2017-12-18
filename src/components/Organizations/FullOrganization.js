import React from 'react';


export default function(props) {
    let link=__dirname+'resources/';

    return (
        props.org.map(item=>{
            return(
                <div key={item.id} className="fullstory_org">
                    <div dangerouslySetInnerHTML={{__html: item.about}}/>
                </div>
            );
        })
    )
}