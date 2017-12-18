import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Loader.css';
import * as organizationsApi from "../../../api/organizations-api";
import OrganizationsList from '../../Organizations/ShortOrganizations';

class ListOrgsForUpdateContainer extends Component {
    constructor(){
        super();
        this.state ={
            items: [],
            hasMore: true
        };
    }

    componentDidMount(){
        organizationsApi.getAllOrganizations();
    }

    render() {
        return (
            <div>
                <OrganizationsList organizationsList={this.props.organizationsList} link={'/admin/orgs/update/'}/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        organizationsList: store.organizationsState.organizationsList
    };
};

export default connect(mapStateToProps)(ListOrgsForUpdateContainer);