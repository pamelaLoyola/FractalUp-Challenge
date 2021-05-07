import React, { Component } from "react";
import "../css/Main.css";
import SongCard from './SongCard';
import CurrentSongCard from "./CurrentSongCard";

export class Main extends Component {
	render() {
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
	}
}

export default Main;
