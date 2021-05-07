import React from "react";
import "../css/SongCard.css";

const SongCard = (props) => {
	return (
		<div className="result--card-song">
			<div
				className="result--photo"
				style={{
					backgroundImage: `url(${props.songPicture})`,
				}}
			>
				<i className="fas fa-play"></i>
				<i className="fas fa-ellipsis-v"></i>
			</div>
			<div className="result-info">
				<p>
					{props.songName} <br />
					<span>{props.artistName}</span>
				</p>
			</div>
		</div>
	);
};

export default SongCard;
