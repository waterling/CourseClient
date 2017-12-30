import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from 'react';
import {Divider} from "material-ui";
const mapState = { center: [40.813819, -73.941430], zoom: 12, controls: []};

const YandexMap = (props) => (
    <div >
        <div className="title"><h1>Карта событий сериала</h1></div>
        <Divider/>
        <br/>
        <YMaps >
            <Map state={mapState} width={756} height={700}>
                {props.labelsList.map(placeMark=>{
                    console.log("Inside Map: "+JSON.stringify(placeMark));
                    return(
                        <Placemark
                            key={placeMark.id}
                            geometry={{
                                coordinates: [parseFloat(placeMark.coordX), parseFloat(placeMark.coordY)],
                            }}
                            properties={{
                                hintContent: placeMark.hintContent,
                                balloonContent: placeMark.balloonContent,
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: __dirname+'resources/'+placeMark.imgURL,
                                iconImageSize: [30, 30],
                                iconImageOffset: [-15, -15]
                            }}
                        />
                    )
                })}
               {/* <Placemark
                    geometry={{
                        coordinates: [40.813819, -73.941430]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/mr-robot-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.786164, -73.980226]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/mr-robot-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.754842, -73.987779]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/e-corp-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.773898, -73.947953]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/e-corp-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.792948, -73.962373]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/dark-army-icon.jpg',
                        iconImageSize: [30, 45],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.780162, -73.974389]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/dark-army-icon.jpg',
                        iconImageSize: [30, 45],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.773376, -73.963746]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/fsociety-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />
                <Placemark
                    geometry={{
                        coordinates: [40.763979, -73.971986]
                    }}
                    properties={{
                        hintContent: 'Fsociety deal',
                        balloonContent: 'Подробное описание'
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: __dirname+'resources/fsociety-icon.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }}
                />*/}

            </Map>
        </YMaps>
    </div>

);

export default YandexMap;