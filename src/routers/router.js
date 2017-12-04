import React from 'react';



import Home from '../components/home';
import NewsListContainer from '../components/containers/NewsContainer';
import CharsListContainer from '../components/containers/CharsContainer';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import SeriesContainer from "../components/containers/SeriesContainer";
import OrganizationsContainer from "../components/containers/OrganizationsContainer";
import FullNewsContainer from "../components/containers/FullNewsContainer";
import EmailEditor from "../components/Editor/EmailEditor";
import Map from "../components/YandexMap";
import NavMenu from "../components/Navigation/NavMenu";





// Pages
const SeriesList = ({ match }) => (
    <SeriesContainer numOfSeason={match.params.numOfSeason} key={match.params.numOfSeason}/>
);// Pages
const News = ({ match }) => (
    <FullNewsContainer id={match.params.id}/>
);



const Routing= ()=>(


    <Router>
        <div>
            <NavMenu/>
            {/*<ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/chars">Characters</Link></li>
                <li><Link to="/organizations">Organizations</Link></li>
                <li><Link to="/online/1">Online1</Link></li>
                <li><Link to="/online/2">Online2</Link></li>
                <li><Link to="/online/3">Online3</Link></li>
                <li><Link to="/editor">Editor</Link></li>
                <li><Link to="/map">Map</Link></li>
            </ul>*/}

            <div className="content">
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/fullnews/:id" component={News}/>
                <Route path="/news" component={NewsListContainer}/>
                <Route path="/chars" component={CharsListContainer}/>
                <Route path="/organizations" component={OrganizationsContainer}/>
                    <Route exact path="/online/:numOfSeason" component={SeriesList}/>
                <Route path="/editor" component={EmailEditor}/>
                <Route path="/map" component={Map}/>
            </Switch>
            </div>
        </div>

    </Router>


);

export default Routing;