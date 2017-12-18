import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import ListCharsForUpdateContainer from "./ListCharsForUpdateContainer";
export default class AdminCharsPanel extends Component {
    render () {
        return(
            <div >
                <Button raised color="primary">Add chars</Button>
                <ListCharsForUpdateContainer/>
            </div>
        )
    }
}