import React, { Component } from 'react'
import '../css/Player.css'
import SongInfo from './SongInfo'

export class Player extends Component {
    render() {
        return (
            <div className="player">
                <SongInfo></SongInfo>
                <div className="song--controllers">
                    <i className="fas fa-step-backward"></i>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-step-forward"></i>
                </div>
                <div className="song--sound-controllers">
                    <i className="fas fa-volume-down"></i>
                    <input type="range" min="0" max="1" step="0.01"/>
                    <i className="fas fa-volume-up"></i>
                </div>
            </div>
        )
    }
}

export default Player
