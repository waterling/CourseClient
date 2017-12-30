import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
import ListSeriesForUpdateContainer from "./ListSeriesForUpdateContainer";
export default class AdminSeriesPanel extends Component {
    render () {
        return(
            <div >
                <Link to={'/admin/addSeries'} ><Button raised color="primary">Добавить серию</Button></Link>
                <ListSeriesForUpdateContainer numOfSeason={this.props.numOfSeason}/>
            </div>
        )
    }
}