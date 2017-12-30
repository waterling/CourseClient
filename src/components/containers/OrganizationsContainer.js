import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrganizationsList from '../Organizations/ShortOrganizations';
import * as organizationsApi from '../../api/organizations-api';

import './Loader.css';
import {Divider} from "material-ui";

class OrganizationsListContainer extends Component {

    componentDidMount(){
        organizationsApi.getAllOrganizations();
    }

    render() {
        return (
            <div>
                <div className="title"><h1>Ораганизации сериала</h1></div>
                <Divider/>
                <br/>
                <OrganizationsList link={'/orgs/'} organizationsList={this.props.organizationsList}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        organizationsList: store.organizationsState.organizationsList
    };
};

export default connect(mapStateToProps)(OrganizationsListContainer);