import React, { Component } from "react";
import '../css/CurrentSongCard.css';
import PropTypes from "prop-types";

export class CurrentSongCard extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="current-song">
				<div className="song--photo">
					<i className="fas fa-play"></i>

					{/* <img src="https://i1.sndcdn.com/artworks-000290295960-jr5x6q-t500x500.jpg" alt="Adele" /> */}
				</div>
				<div className="song--info">
					<p>Adele 21</p>
					<p>
						Lo mejor de Adele <span>1000 seguidores</span>
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Illum quos ratione sunt laudantium, odio amet placeat!
						Aliquam, voluptate dignissimos nisi repellat inventore
						sapiente distinctio beatae cumque dolorum quis ab
						quibusdam!
					</p>

					<div className="song--actions">
						<a href="#">Reproducir</a>
						<a href="#">Seguir</a>
						<i className="fas fa-ellipsis-h"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default CurrentSongCard;
