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
import AddNewsContainer from "../components/Admin/News/AddNewsContainer";
import UpdateNewsContainer from "../components/Admin/News/ListNewsForUpdateContainer";
import FullSeriesContainer from "../components/containers/FullSeriesContainer";
import AdminPanel from "../components/Admin/AdminPanel"
import AdminNewsPanel from "../components/Admin/News/AdminNewsPanel";
import ContainerUpdateNews from "../components/Admin/News/ContainerUpdateNews";
import FullCharsContainer from "../components/containers/FullCharactersContainer";
import DeleteNews from "../components/Admin/News/DeleteNews";
import SignUp from "../components/Login/SignUp/SignUp";
import Login from "../components/Login/Login";
import UserPage from "../components/PersonalPage/UserPage";
import MapContainer from "../components/containers/MapContainer";
import FullOrganizationContainer from "../components/containers/FullOrganizationContainer";
import AdminCharsPanel from "../components/Admin/Characters/AdminCharsPanel";
import AddCharsContainer from "../components/Admin/Characters/AddCharsContainer";
import ContainerUpdateChars from "../components/Admin/Characters/ContainerUpdateChars";
import AdminOrgsPanel from "../components/Admin/Organizations/AdminOrgsPanel";
import AddOrgsContainer from "../components/Admin/Organizations/AddOrgsContainer";
import ContainerUpdateOrgs from "../components/Admin/Organizations/ContainerUpdateOrgs";
import AdminChooseSeasonPanel from "../components/Admin/Series/AdminChooseSeasonPanel";
import AdminSeriesPanel from "../components/Admin/Series/AdminSeriesPanel";
import AddSeriesContainer from "../components/Admin/Series/AddSeriesContainer";
import ContainerUpdateSeries from "../components/Admin/Series/ContainerUpdateSeries";





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
    <ContainerUpdateNews newsId={match.params.newsId}/>
);

const CharsUpdate = ({ match }) => (
    <ContainerUpdateChars charsId={match.params.charsId}/>
);

const OrgsUpdate = ({ match }) => (
    <ContainerUpdateOrgs orgsId={match.params.orgsId}/>
);

const SeriesUpdate = ({ match }) => (
    <ContainerUpdateSeries seriesId={match.params.seriesId}/>
);

const AdminOnlinePanel = ({ match }) => (
    <AdminSeriesPanel numOfSeason={match.params.numOfSeason}/>
);

const Series = ({match})=>(
    <FullSeriesContainer id={match.params.id}/>
);

const Organization = ({match})=>(
    <FullOrganizationContainer id={match.params.id} />
);



const Routing= ()=>(


    <Router>
        <div>
            <NavMenu/>

            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route exact path="/news" component={NewsListContainer}/>
                    <Route path="/news/:id" component={News}/>

                    <Route exact path="/chars" component={CharsListContainer}/>
                    <Route path="/chars/:id" component={Chars}/>

                    <Route exact path="/orgs" component={OrganizationsContainer}/>
                    <Route path="/orgs/:id" component={Organization}/>

                    <Route exact path="/online/:numOfSeason" component={SeriesList}/>
                    <Route path="/online/series/:id" component={Series}/>

                    <Route exact path="/admin" component={AdminPanel}/>

                    <Route exact path="/admin/news" component={AdminNewsPanel}/>
                    <Route path="/admin/news/add" component={AddNewsContainer}/>
                    <Route path="/admin/news/delete/:id" component={DeleteNewsContainer}/>
                    <Route path="/admin/news/update/:newsId" component={NewsUpdate}/>

                    <Route exact path="/admin/chars" component={AdminCharsPanel}/>
                    <Route path="/admin/chars/add" component={AddCharsContainer}/>
                    {/*<Route path="/admin/chars/delete/:id" component={DeleteNewsContainer}/>*/}
                    <Route path="/admin/chars/update/:charsId" component={CharsUpdate}/>

                    <Route exact path="/admin/orgs" component={AdminOrgsPanel}/>
                    <Route path="/admin/orgs/add" component={AddOrgsContainer}/>
                    {/*<Route path="/admin/chars/delete/:id" component={DeleteNewsContainer}/>*/}
                    <Route path="/admin/orgs/update/:orgsId" component={OrgsUpdate}/>

                    <Route exact path="/admin/online" component={AdminChooseSeasonPanel}/>
                    <Route exact path="/admin/online/:numOfSeason" component={AdminOnlinePanel}/>
                    <Route path="/admin/online/add" component={AddSeriesContainer}/>
                    {/*<Route path="/admin/chars/delete/:id" component={DeleteNewsContainer}/>*/}
                    <Route path="/admin/online/update/:seriesId" component={SeriesUpdate}/>

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