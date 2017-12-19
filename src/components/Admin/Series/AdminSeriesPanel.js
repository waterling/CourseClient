import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import ListSeriesForUpdateContainer from "./ListSeriesForUpdateContainer";
export default class AdminSeriesPanel extends Component {
    render () {
        return(
            <div >
                <Button raised color="primary">Добавить серию</Button>
                <ListSeriesForUpdateContainer numOfSeason={this.props.numOfSeason}/>
            </div>
        )
    }
}