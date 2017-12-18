import React, {Component} from 'react';
import * as orgsApi from '../../../api/organizations-api';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import UpdateOrgs from "./UpdateOrgs";

class ContainerUpdateOrgs extends Component {
    constructor(props) {
        super(props);
        this.updateOrgs = this.updateOrgs.bind(this);
    }

    componentWillUnmount() {
        orgsApi.clearOrganizations();
    }

    componentDidMount() {
        if (this.props.orgsId) {
            orgsApi.getOrganization(this.props.orgsId);
        }
    }

    render() {
        return (
            <div>
                {this.props.organizationsList.map(element => {
                    return (
                        <UpdateOrgs
                            orgId={element.id}
                            name={element.name}
                            imgURL={element.imgURL}
                            design={element.design}
                            updateOrgs={this.updateOrgs}/>
                    );
                })}
            </div>
        )
    }

    updateOrgs(org) {
        orgsApi.addOrg(org).then(data => {
            console.log(data);
        });
    }
}

const mapStateToProps = function (store) {
    return {
        organizationsList: store.organizationsState.organizationsList
    };
};

export default connect(mapStateToProps)(ContainerUpdateOrgs);
