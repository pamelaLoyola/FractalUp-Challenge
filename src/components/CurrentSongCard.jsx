import React from "react";
import SongContext from "../context/Songs/SongContext";
import "../css/CurrentSongCard.css";

const CurrentSongCard = (props) => {
	const { togglePlaying } = React.useContext(SongContext);

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
				<i
					className="fas fa-play"
					onClick={() => {
						togglePlaying();
					}}
				></i>
			</div>
			<div className="song--info" style={coverStyle}>
				<p>{props.artistName}</p>
				<p>
					Lo mejor de {props.artistName} <span>1000 seguidores</span>
				</p>
				<p>
					Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5
					de mayo de 1988), conocida simplemente como Adele, es una
					cantante, compositora y multinstrumentista británica.
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
