import React from 'react';

import  {Link}  from 'react-router-dom';



// Using "Stateless Functional Components"

export default function(props) {

    return (

        <div className="app">

            <header className="primary-header"/>

            <aside className="primary-aside">

                <ul>

                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/news">News</Link></li>

                </ul>

            </aside>

            <main>

                {props.children}

            </main>

        </div>

    );

}