import React, {Component} from 'react';
import * as seriesApi from '../../../api/series-api';

import '../../containers/Loader.css';
import EmailEditor from 'react-email-editor';
import {connect} from "react-redux";
import {TextField} from "material-ui";
import UpdateSeries from "./UpdateSeries";

class ContainerUpdateSeries extends Component {
    constructor(props) {
        super(props);
        this.updateSeries = this.updateSeries.bind(this);
    }

    componentWillUnmount() {
        seriesApi.clearStoreSeries();
    }

    componentDidMount() {
        if (this.props.seriesId) {
            seriesApi.getSeries(this.props.seriesId);
        }
    }

    render() {
        return (
            <div>
                {this.props.seriesList.map(element => {
                    return (
                        <UpdateSeries
                            seriesId={element.id}
                            numOfSeazon={element.numOfSeazon}
                            numOfSer={element.numOfSer}
                            src={element.src}
                            imgURL={element.imgURL}
                            design={element.design}
                            updateSeries={this.updateSeries}/>
                    );
                })}
            </div>
        )
    }

    updateSeries(series) {
        seriesApi.addSeries(series).then(data => {
            console.log(data);
        });
    }
}

const mapStateToProps = function (store) {
    return {
        seriesList: store.seriesState.seriesList
    };
};

export default connect(mapStateToProps)(ContainerUpdateSeries);
