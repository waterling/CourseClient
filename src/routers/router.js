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
import NavMenu from "../components/Navigation/NavMenu";
import AddNewsContainer from "../components/Admin/AddNewsContainer";
import UpdateNewsContainer from "../components/Admin/UpdateNewsContainer";
import FullSeriesContainer from "../components/containers/FullSeriesContainer";
import AdminPanel from "../components/Admin/AdminPanel"
import AdminNewsPanel from "../components/Admin/AdminNewsPanel";
import ContainerUpdateNews from "../components/Admin/ContainerUpdateNews";
import FullCharsContainer from "../components/containers/FullCharactersContainer";
import DeleteNews from "../components/Admin/DeleteNews";
import SignUp from "../components/Login/SignUp/SignUp";
import Login from "../components/Login/Login";
import UserPage from "../components/PersonalPage/UserPage";
import MapContainer from "../components/containers/MapContainer";





// Pages
const SeriesList = ({ match }) => (
    <SeriesContainer numOfSeason={match.params.numOfSeason} key={match.params.numOfSeason}/>
);// Pages
const News = ({ match }) => (
    <FullNewsContainer id={match.params.id}/>
);
const DeleteNewsContainer = ({ match }) => (
    <DeleteNews id={match.params.id}/>
);
const Chars = ({ match }) => (
    <FullCharsContainer id={match.params.id}/>
);
const NewsUpdate = ({ match }) => (
    <ContainerUpdateNews newsId={match.params.newsId} title={"TITLE"}/>
);

const Series = ({match})=>(
        <FullSeriesContainer id={match.params.id}/>
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
                    <Route path="/news/:id" component={News}/>
                    <Route exact path="/news" component={NewsListContainer}/>
                    <Route path="/admin/news/add" component={AddNewsContainer}/>
                    <Route path="/admin/news/delete/:id" component={DeleteNewsContainer}/>
                    <Route exact path="/admin" component={AdminPanel}/>
                    <Route exact path="/admin/news" component={AdminNewsPanel}/>
                    <Route path="/admin/news/update/:newsId" component={NewsUpdate}/>
                    <Route exact path="/chars" component={CharsListContainer}/>
                    <Route path="/chars/:id" component={Chars}/>
                    <Route path="/organizations" component={OrganizationsContainer}/>
                    <Route exact path="/online/:numOfSeason" component={SeriesList}/>
                    <Route path="/online/series/:id" component={Series}/>
                    <Route path="/editor" component={EmailEditor}/>
                    <Route path="/map" component={MapContainer}/>

                    <Route path="/user" component={UserPage}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </div>

    </Router>


);

export default Routing;