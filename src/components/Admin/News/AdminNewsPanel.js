import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import UpdateNewsContainer from "./ListNewsForUpdateContainer";
export default class AdminNewsPanel extends Component {
    render () {
        return(
            <div >
                <Link to={'/admin/addNews'} ><Button raised color="primary">Добавить новость</Button></Link>
                <UpdateNewsContainer/>
            </div>
        )
    }
}