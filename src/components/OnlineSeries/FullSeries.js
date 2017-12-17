import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import App from "../../App";
// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/';

    return (
        props.series.map(item=>{
            return(
                <App/>
               /* <div key={item.id} className="fullstory_series">
                    <Player
                        playsInline
                        poster={link+item.imgURL}
                        src={item.src}
                    />
                </div>*/
            );
        })
    )
}