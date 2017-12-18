import React from 'react';
import './ShortOrganizations.css'
import {Link} from "react-router-dom";

// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/organizations/';
    return (
        <div className="org-list">
            {props.organizationsList.map(organization => {
                return (
                    <div className="short-organization" key={organization.id}>
                        <Link to={'/organizations/'+organization.id}>
                            <img src={link+organization.imgURL} alt={organization.name}/>
                            <div className="name-organization">{organization.name}</div>
                        </Link>
                    </div>
                );
            })}
        </div>

    );
}