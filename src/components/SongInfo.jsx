import React, { Component } from "react";
import PropTypes from "prop-types";

export class SongInfo extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="song-info">
				<div className="photo">
					<img
						src="https://static01.nyt.com/images/2015/11/15/arts/15ADELE/15ADELE-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale"
						alt="Adele"
					/>
				</div>
				<div className="info--detail">
					<p>Canción</p>
					<p>Artista - Álbum</p>
				</div>
			</div>
		);
	}
}

export default SongInfo;
