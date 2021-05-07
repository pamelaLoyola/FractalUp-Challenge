import React from "react";
import "../css/CurrentSongCard.css";

const CurrentSongCard = (props) => {
	const coverStyle = {
		backgroundImage: `linear-gradient(10deg, rgba(216, 75, 75, 0.7), rgba(50, 0, 0, 0.7)), 
		url(${props.songPicture})`,
	};
	return (
		<div className="current-song">
			<div
				className="song--photo"
				style={{ backgroundImage: `url(${props.artistPicture})` }}
			>
				<i className="fas fa-play"></i>
			</div>
			<div className="song--info" style={coverStyle}>
				<p>{props.artistName}</p>
				<p>
					Lo mejor de {props.artistName} <span>1000 seguidores</span>
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illum quos ratione sunt laudantium, odio amet placeat!
					Aliquam, voluptate dignissimos nisi repellat inventore
					sapiente distinctio beatae cumque dolorum quis ab quibusdam!
				</p>

				<div className="song--actions">
					<a href="#">Reproducir</a>
					<a href="#">Seguir</a>
					<i className="fas fa-ellipsis-h"></i>
				</div>
			</div>
		</div>
	);
};

export default CurrentSongCard;
