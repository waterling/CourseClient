import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import ListOrgsForUpdateContainer from "./ListOrgsForUpdateContainer";
export default class AdminOrgsPanel extends Component {
    render () {
        return(
            <div >
                <Button raised color="primary">Add orgs</Button>
                <ListOrgsForUpdateContainer/>
            </div>
        )
    }
}