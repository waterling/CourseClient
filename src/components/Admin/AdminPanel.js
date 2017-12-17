import {Component} from "react";
import * as React from "react";
import {Button} from "material-ui";
import {Link} from "react-router-dom";
export default class AdminPanel extends Component {
    render () {
        return(
            <div >
                <Link to="/admin/news"><Button raised color="primary">News</Button></Link>
                <Button raised color="primary">Series</Button>
                <Button raised color="primary">Characters</Button>
                <Button raised color="primary">Organizations</Button>
            </div>

        )
    }
}