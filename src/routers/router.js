import React from 'react';

import { Router, Route} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/home';
import NewsListContainer from '../components/containers/NewsContainer';
import CharsListContainer from '../components/containers/CharsContainer';

import {Link} from "react-router-dom";
import SeriesContainer from "../components/containers/SeriesContainer";
import OrganizationsContainer from "../components/containers/OrganizationsContainer";
import FullNewsContainer from "../components/containers/FullNewsContainer";
import EmailEditor from "../components/Editor/EmailEditor";
import Map from "../components/YandexMap";


const history = createBrowserHistory();



// Pages
const SeriesList = ({ match }) => (
    <SeriesContainer numOfSeason={match.params.numOfSeason}/>
);// Pages
const News = ({ match }) => (
    <FullNewsContainer id={match.params.id}/>
);



export default (


    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/chars">Characters</Link></li>
                <li><Link to="/organizations">Organizations</Link></li>
                <li><Link to="/series/3">Online</Link></li>
                <li><Link to="/editor">Editor</Link></li>
                <li><Link to="/map">Map</Link></li>
            </ul>

            <hr/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/fullnews/:id" component={News}/>
                <Route path="/news" component={NewsListContainer}/>
                <Route path="/chars" component={CharsListContainer}/>
                <Route path="/organizations" component={OrganizationsContainer}/>
                <Route path="/series/:numOfSeason" component={SeriesList}/>
                <Route path="/editor" component={EmailEditor}/>
                <Route path="/map" component={Map}/>
            </div>
        </div>

    </Router>


);