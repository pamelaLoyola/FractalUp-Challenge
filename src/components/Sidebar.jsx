import React, { Component } from 'react'

/*styles*/
import '../css/Sidebar.css'

/*assets*/
import foxbelLogo from '../images/foxbel-music.png'

export class Sidebar extends Component {
    render() {
        return (
            <div className="menu">
                <img className="logo" src={foxbelLogo} alt="Foxbel Logo" />

                <section className="library-section">
                    <p>Mi Librería</p>
                    <ul>
                        <li><a href="#">Recientes</a></li>
                        <li><a href="#">Artistas</a></li>
                        <li><a href="#">Álbums</a></li>
                        <li><a href="#">Canciones</a></li>
                        <li><a href="#">Estaciones</a></li>
                    </ul>
                </section>

                <section className="playlist-section">
                    <p>Playlist</p>
                    <ul>
                        <li><a href="#">Metal</a></li>
                        <li><a href="#">Para bailar</a></li>
                        <li><a href="#">Rock 90s</a></li>
                        <li><a href="#">Baladas</a></li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Sidebar
