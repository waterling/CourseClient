import React from 'react';
import {Link} from "react-router-dom";
import './NewSeries.css';
import {ProgressBar} from "react-bootstrap";
import * as cookie from 'react-cookies';

// Using "Stateless Functional Components"
export default function(props) {
    let link=__dirname+'resources/uploads/';
    return (
        <div className="series-list">{props.seriesList.map(oneSer => {
                if (cookie.load('user')){
                    let progress = oneSer.viewed?oneSer.viewed.fluid:0;
                    let haveSeen = oneSer.viewed?oneSer.viewed.haveSeen:0;
                    return (
                        <div key={oneSer.id} style={{display: 'flex', flexDirection:'column'}}>
                            <div  className="new-series-item">
                                <div className="new_series">
                                    <Link to={props.link+oneSer.id}>
                                        <div className="series_thumb">
                                            <img width={190} height={120} src={link+oneSer.imgURL} alt="Новая серия"/>
                                            <div className="ser_num">
                                                {oneSer.numOfSeazon + ' сезон, ' + oneSer.numOfSer+' серия'}
                                            </div>
                                            <div className="added">Добавлено</div>
                                        </div>
                                    </Link>
                                </div>
                                {props.progress &&
                                <div style={{
                                    width: '200px',
                                    marginBottom:'30px',
                                    marginLeft: '20px',
                                    float: 'left', display: 'flex',
                                    flexDirection:'column',
                                    textAlign: 'center',}}
                                >
                                    <h3>
                                        Ваш прогресс просмотра
                                    </h3>


                                    <ProgressBar bsStyle={progress>=91.01?'success':'info'} style={{}} active now={progress} />
                                    {(progress>=91.01 || haveSeen)?<img width={200} height={80} src="/image/completed.png"/>:''}
                                </div>}


                            </div>
                        </div>


                    );
                }else{
                    return (
                        <div key={oneSer.id} className="new-series-item">
                            <div className="new_series">
                                <Link to={props.link+oneSer.id}>
                                    <div className="series_thumb">
                                        <img width={190} height={120} src={link+oneSer.imgURL} alt="Новая серия"/>
                                        <div className="ser_num">
                                            {oneSer.numOfSeazon + ' сезон, ' + oneSer.numOfSer+' серия'}
                                        </div>
                                        <div className="added">Добавлено</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                }

            })}
        </div>
    );
}