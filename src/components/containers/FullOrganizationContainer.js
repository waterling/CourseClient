import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as orgsApi from '../../api/organizations-api';

import FullOrganization from "../Organizations/FullOrganization";

class FullOrganizationContainer extends Component {

    componentDidMount(){
        orgsApi.getOrganization(this.props.id)
    }
    componentWillUnmount(){
        orgsApi.clearOrganizations();
    }

    render() {
        return (
            <div>
                <FullOrganization org={this.props.organizationsList} numOfOrg={this.props.id}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        organizationsList: store.organizationsState.organizationsList
    };
};

export default connect(mapStateToProps)(FullOrganizationContainer);