import React from 'react';

import { Router, Route} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/home';
import NewsListContainer from '../components/containers/NewsContainer';
import CharsListContainer from '../components/containers/CharsContainer';

import {Link} from "react-router-dom";
import SeriesContainer from "../components/containers/SeriesContainer";


const history = createBrowserHistory();



// Pages
const SeriesList = ({ match }) => (
    <SeriesContainer numOfSeason={match.params.numOfSeason}/>
);



export default (


    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/chars">Characters</Link></li>
                <li><Link to="/series/3">Online</Link></li>
            </ul>

            <hr/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/news" component={NewsListContainer}/>
                <Route path="/chars" component={CharsListContainer}/>
                <Route path="/series/:numOfSeason" component={SeriesList}/>
            </div>
        </div>

    </Router>


);