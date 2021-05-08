import React from "react";
// Context
import SongContext from "../context/Songs/SongContext";
import SongInfo from "./SongInfo";
import "../css/Player.css";

const Player = () => {

	const audio = React.useRef("audio_tag");

	const [stateVol, setStateVol] = React.useState(0.3);

	const {
		resultSongs,
		currentSong,
		playing,
		// audio,
		togglePlaying,
		prevSong,
		nextSong,
	} = React.useContext(SongContext);

	const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

	const handleVolume = (q) => {
		setStateVol(q);
		audio.current.volume = q;
	};


	return (
		<div className="player">
			<SongInfo></SongInfo>
			<audio className="audio" controls ref={audio} type="audio/mpeg" preload="auto">
				<source
					// src={resultSongs.length ? `resultSongs[0].preview` : ''}
					src="https://cdns-preview-3.dzcdn.net/stream/c-30850f08c37d0860c788a31084ec8641-3.mp3"
					type="audio/mpeg"	
				/>
			</audio>

			{/* Playlist controllers */}
			<div className="song--controllers">
				<i className="fas fa-step-backward" onClick={prevSong}></i>
				<span onClick={() => {togglePlaying() ; toggleAudio()}}>
					<span className={playing ? '' : 'hide'}><i className="fas fa-play"></i></span>
					<span className={playing ? 'hide' : ''}><i className="fas fa-pause"></i></span>
				</span>
				<i className="fas fa-step-forward" onClick={nextSong}></i>
			</div>

			{/* Sound controllers */}
			<div className="song--sound-controllers">
				<i className="fas fa-volume-down"></i>
				<input
					value={Math.round(stateVol * 100)}
					type="range"
					name="volBar"
					id="volBar"
					onChange={(e) => handleVolume(e.target.value / 100)}
				/>
				<i className="fas fa-volume-up"></i>
			</div>
		</div>
	);
};

export default Player;
