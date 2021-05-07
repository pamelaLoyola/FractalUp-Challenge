import React from "react";
import "../css/CurrentSongCard.css";

const CurrentSongCard = () => {
	return (
		<div className="current-song">
			<div className="song--photo">
				<i className="fas fa-play"></i>
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
