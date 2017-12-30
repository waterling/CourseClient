import React, {Component} from 'react';
import * as seriesApi from '../../api/series-api';
import * as cookie from 'react-cookies';
import {updateCurrentTime} from "../../api/series-api";
import {Divider} from "material-ui";
import {toast} from "react-toastify";


export default class SeasonInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            update: false,
        }
    }
    changeStatus(series){
        this.props.updateHaveSeen(series.id);
        if(series.viewed.haveSeen){
            toast.info('Серия отмечена как непросмотренная');
        }else {

            toast.info('Серия отмечена как просмотренная');
        }

    }
    render(){
        let seasons=[];
        let count=[0,0,0];
        let need=[10,12,10];
        this.props.seriesList.map(element=>{
            if (!(seasons.indexOf( element.numOfSeazon ) !== -1 )){
                seasons.push(element.numOfSeazon)
            }
            count[element.numOfSeazon]++;
            if(count[element.numOfSeazon]>need[element.numOfSeazon]){
                need[element.numOfSeazon]=count[element.numOfSeazon];
            }
        });
        console.log(seasons);
        return(
            <div>
                {seasons.map(season=>{

                    return (
                        <div key={season}>
                            <div className="season-info">
                                <div className="half-hor-spacer"/>
                                <h2>{season} сезон</h2>
                                <div className="half-hor-spacer"/>
                                <div className="season-details-block">
                                    <div className="mark-green-box" title="">
                                        9
                                    </div>
                                    {/*<div title="Пометить все серии сезона как просмотренные" className="haveseen-btn"/>*/}
                                    {/*<div className="season-cover-box" title="Увеличить">*/}
                                        {/*<div className="poster-zoom-icon"/>*/}
                                        <img src={"http://static.lostfilm.tv/Images/245/Posters/t_shmoster_s"+season+".jpg"} className="cover" />
                                    {/*</div>*/}
                                    <div className="season-body">
                                        <div className="season-details">
                                            Статус:
                                            {need[season]<=count[season]?'Завершён':'Идёт'}
                                            <div className="half-hor-spacer"/>
                                            {'Год:'+ (2014+season)}
                                            <div className="half-hor-spacer"/>
                                            Количество вышедших серий: {count[season]}  <span className="gray-text">(из {need[season]})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.props.seriesList.map(element=>{
                                if(element.numOfSeazon===season){
                                    let haveSeen;
                                    if (element.viewed){
                                        haveSeen = element.viewed.haveSeen;
                                    }
                                    return(
                                        <div key={element.id} className="user-series-info">
                                            <img key={element.id} onClick={this.changeStatus.bind(this,element)} className={haveSeen?"haveseen-btn":"haventseen-btn"}/>
                                            <div style={{marginLeft: '10px'}}> {season} сезон {element.numOfSer} серия</div>
                                            {/*<div style={{marginLeft: '10px'}}>Могучее дерево выше остальных</div>*/}
                                        </div>
                                    )
                                }

                            })}
                            <br/>
                            <Divider/>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}