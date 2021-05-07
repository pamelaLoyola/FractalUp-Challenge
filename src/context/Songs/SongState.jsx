import React, { useReducer } from "react";
import axios from "axios";

import SongContext from "./SongContext";
import SongReducer from "./SongReducer";
import { SEARCH_SONGS } from "../types";

const SongState = (props) => {
	const initialState = {
		currentSong: null,
		selectedSong: null,
		resultSongs: [],
		defaultSongs: [],
	};

	const [state, dispatch] = useReducer(SongReducer, initialState);

	const baseUrl = process.env.REACT_APP_API_URL;

	const searchByName = async (songName) => {
		try {
			const res = await axios.get(`${baseUrl}/search`, {
				params: {
					q: `${songName}`,
				},
			});

			console.log(res.data.data);
            const data = res.data.data;
            dispatch({type: SEARCH_SONGS, payload: data})

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SongContext.Provider
			value={{
				currentSong: state.currentSong,
				selectedSong: state.selectedSong,
				resultSongs: state.resultSongs,
				defaultSongs: state.defaultSongs,
				searchByName,
			}}
		>
			{props.children}
		</SongContext.Provider>
	);
};

export default SongState;
