import React from "react";
import axios from "axios";
import "../css/Search.css";

const SearchBox = () => {
	const baseUrl = process.env.REACT_APP_API_URL;

	// Response Data Model
	const [songs, setSongs] = React.useState([]);
	const [songName, setSongName] = React.useState("");

	// React.useEffect(() => {
	// 	const getSongs = async () => {
	// 		try {
	// 			const res = await axios.get(`${baseUrl}/album/302127`);

	// 			console.log(res.data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	getSongs();
	// },[]);

	const filterByName = async (e) => {
		if (e.key === "Enter") {
			try {
				const res = await axios.get(`${baseUrl}/search`, {
					params: {
						q: `${songName}`,
					},
				});

				console.log(res.data.data)
				if (res.data) {
					setSongs(res.data.data);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="search">
			<div className="searchBox">
				<input
					type="text"
					placeholder="Buscar"
					onChange={(e) => setSongName(e.target.value)}
					onKeyPress={filterByName}
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
