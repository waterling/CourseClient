import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import UpdateNewsContainer from "./ListNewsForUpdateContainer";
export default class AdminNewsPanel extends Component {
    render () {
        return(
            <div >
                <Button raised color="primary">Add news</Button>
                <UpdateNewsContainer/>
            </div>
        )
    }
}