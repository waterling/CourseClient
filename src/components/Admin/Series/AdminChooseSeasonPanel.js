import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
export default class AdminChooseSeasonPanel extends Component {
    render () {
        return(
            <div >
                <Link to={'/admin/season/1'}><Button raised color="primary">1 сезон</Button></Link>
                <br/>
                <Link to={'/admin/season/2'}><Button raised color="primary">2 сезон</Button></Link>
                <br/>
                <Link to={'/admin/season/3'}><Button raised color="primary">3 сезон</Button></Link>
            </div>
        )
    }
}