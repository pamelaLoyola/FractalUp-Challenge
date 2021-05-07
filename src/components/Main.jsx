import React from "react";
import "../css/Main.css";
import SongCard from "./SongCard";
import CurrentSongCard from "./CurrentSongCard";

const Main = () => {
	return (
		<div className="main">
			<CurrentSongCard></CurrentSongCard>

			<div className="search-results">
				<p>Resultados</p>
				<div className="results--songs">
					<SongCard></SongCard>
					<SongCard></SongCard>
					<SongCard></SongCard>
					<SongCard></SongCard>
					<SongCard></SongCard>
					<SongCard></SongCard>
					<SongCard></SongCard>
				</div>
			</div>
		</div>
	);
};

export default Main;
