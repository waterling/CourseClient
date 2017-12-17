import React from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import SeriesPlayer from "./SeriesPlayer";

export default class FullSeries extends React.Component{
    constructor(props){
        super(props);
    }
    changeCurrentTime(){

    }
    render(){
        if(this.props.series && this.props.series.length!==0 ){
            if(this.props.series.series){
                const item = this.props.series;
                return(
                    <SeriesPlayer
                        key={item.id}
                        seriesID={item.series.id}
                        src={item.series.src}
                        startTime={item.time}
                        changeCurrentTime={this.props.changeCurrentTime}/>
                );
            }
            const item = this.props.series;
            return(
                <SeriesPlayer
                    key={item.id}
                    seriesID={item.id}
                    src={item.src}
                    changeCurrentTime={this.changeCurrentTime}/>
            );

        }else {
            return (
                <div>

                </div>)
        }

    }
}