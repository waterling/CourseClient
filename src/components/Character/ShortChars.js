import React from 'react';
import './ShortChars.css'
import {Link} from "react-router-dom";

// Using "Stateless Functional Components"
export default function(props) {
    let link='./resources/';
    return (
        <div className="chars-list">
            {props.charsList.map(chars => {
                return (
                    <div className="short_actor" key={chars.id}>
                        <Link to={'/chars/'+chars.id}>
                            <img src={link+chars.imgURL} alt={chars.firstName+' '+chars.surname}/>
                            <div className="name_actor">{chars.firstName+' '+chars.surname}</div>
                        </Link>
                    </div>
                );
            })} 
        </div>

    );
}