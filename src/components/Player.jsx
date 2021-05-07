import React, { Component } from 'react'
import '../css/Player.css'

export class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="song-info">
                    <div className="photo">
                        <img src="https://static01.nyt.com/images/2015/11/15/arts/15ADELE/15ADELE-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale" alt="Adele" />
                    </div>
                    <div className="info--detail">
                        <p>Canción</p>
                        <p>Artista - Álbum</p>
                    </div>
                </div>
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
