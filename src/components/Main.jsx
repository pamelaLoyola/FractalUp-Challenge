import React from "react";
// Context
import SongContext from "../context/Songs/SongContext";
// Components
import SongCard from "./SongCard";
import CurrentSongCard from "./CurrentSongCard";
// Styles
import "../css/Main.css";

const Main = () => {
	const songContext = React.useContext(SongContext);
	const [currentSong, setCurrentSong] = React.useState('');

	React.useEffect(() => {
		setCurrentSong(songContext.resultSongs[0])
	})

	return (
		<div className="main">
			{
				currentSong && (
					<CurrentSongCard
						songId = {currentSong.id}
						artistName={currentSong.artist.name}
						artistPicture={currentSong.artist.picture_big}
						songPicture={currentSong.album.cover_xl}
					></CurrentSongCard>
				)
			}

			{/* {songContext.resultSongs.length ? (
				<CurrentSongCard
					songId = {songContext.resultSongs[0].id}
					artistName={songContext.resultSongs[0].artist.name}
					artistPicture={
						songContext.resultSongs[0].artist.picture_big
					}
					songPicture={songContext.resultSongs[0].album.cover_xl}
				></CurrentSongCard>
			) : null
			
			} */}

			<div className="search-results">
				<p>Resultados</p>
				<div className="results--songs">
					{songContext.resultSongs.length
						? songContext.resultSongs.map((song) => (
								<SongCard
									key={song.id}
									songName={song.title}
									songPicture={song.album.cover_big}
									artistName={song.artist.name}
								></SongCard>
						  ))
						: null}
				</div>
			</div>
		</div>
	);
};

export default Main;
