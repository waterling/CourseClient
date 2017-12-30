import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import {
    Button, Form, FormGroup,
    Label, Input, Col
} from 'reactstrap';

const sources = {
    sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default class SeriesPlayer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            source: props.src,
        };
    }

    componentDidMount() {
        // subscribe state change
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
        this.props.changeCurrentTime(state.currentTime,this.props.seriesID, state.duration);
    }



    render() {
        return (
            <div className={"Player"} style={{height: 600, width: 756}}>
                <br/>
                <Player
                    startTime={this.props.startTime}
                    ref="player"
                >
                    <source src={this.state.source} />
                    <ControlBar autoHide={false} />
                </Player>
            </div>
        );
    }
}