import React from 'react';
import './ShortOrganizations.css'

// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/organizations/';
    return (
        <div className="org-list">
            {props.organizationsList.map(organization => {
                return (
                    <div className="short-organization" key={organization.id}>
                        <a>
                            <img src={link+organization.imgURL} alt={organization.name}/>
                            <div className="name-organization">{organization.name}</div>
                        </a>
                    </div>
                );
            })}
        </div>

    );
}