import React from "react";
import axios from "axios";
// Context
import SongContext from "../context/Songs/SongContext";
import "../css/Search.css";

const SearchBox = () => {
	const songContext = React.useContext(SongContext);

	// Response Data Model
	const [songName, setSongName] = React.useState("");

	// React.useEffect(() => {
	// 	songContext.searchByName('karol g');
	// });

	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			songContext.searchByName(songName);
		}
	};

	return (
		<div className="search">
			<div className="searchBox">
				<input
					type="text"
					placeholder="Buscar"
					onChange={(e) => setSongName(e.target.value)}
					onKeyPress={onKeyPress}
				/>
				<i className="fas fa-search"></i>
			</div>
			<div className="userBox">
				<i className="fas fa-user"></i>
				<p>Pamela L.</p>
			</div>
		</div>
	);
};

export default SearchBox;
