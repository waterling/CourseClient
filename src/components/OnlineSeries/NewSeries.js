import React from 'react';
import {Link} from "react-router-dom";
import './NewSeries.css';

// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/uploads/';
    return (
        <div className="series-list">
            {props.seriesList.map(series => {
                return (
                    <div key={series.id} className="new-series-item">
                        <div className="new_series">
                            <Link to={props.link+series.id}>
                                <div className="series_thumb">
                                    <img width={190} height={120} src={link+series.imgURL} alt="Новая серия"/>
                                    <div className="ser_num">
                                        {series.numOfSeazon + ' сезон, ' + series.numOfSer+' серия'}
                                    </div>
                                    <div className="added">Добавлено</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}