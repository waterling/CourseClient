import React from 'react';
import './CharsItem.css'

// Using "Stateless Functional Components"
export default function(props) {
    let link='./resources/';
    return (
        <div className="chars-list">
            {props.charsList.map(chars => {
                return (
                    <div className="short_actor" key={chars.id}>
                        <a>
                            <img src={link+chars.imgURL} alt={chars.firstName+' '+chars.surname}/>
                            <div className="name_actor">{chars.firstName+' '+chars.surname}</div>
                        </a>
                    </div>
                );
            })} 
        </div>

    );
}