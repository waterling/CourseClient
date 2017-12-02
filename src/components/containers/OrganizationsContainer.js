import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrganizationsList from '../Organizations/ShortOrganizations';
import * as organizationsApi from '../../api/organizations-api';

import './Loader.css';

class OrganizationsListContainer extends Component {

    componentDidMount(){
        organizationsApi.getAllOrganizations();
    }

    render() {
        return (
            <div>
                <OrganizationsList organizationsList={this.props.organizationsList}/>
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