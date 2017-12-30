import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import ListCharsForUpdateContainer from "./ListCharsForUpdateContainer";
export default class AdminCharsPanel extends Component {
    render () {
        return(
            <div >
                <Link to={'/admin/chars/add'} ><Button raised color="primary">Добавить персонажа</Button></Link>
                <ListCharsForUpdateContainer/>
            </div>
        )
    }
}