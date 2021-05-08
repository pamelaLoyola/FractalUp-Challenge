import React, { useReducer } from "react";
import axios from "axios";

import SongContext from "./SongContext";
import SongReducer from "./SongReducer";
import { SEARCH_SONGS, TOGGLE_PLAYING, SET_CURRENT_SONG, GET_SONGS } from "../types";

const SongState = (props) => {
	const initialState = {
		currentSong: 0,
		// selectedSong: null,
		playing: false,
		audio: null,
		resultSongs: [],
		defaultSongs: [],
	};

	const baseUrl = process.env.REACT_APP_API_URL;

	const [state, dispatch] = useReducer(SongReducer, initialState);

	// const getRecomendedSongs = async () => {

	// 	try{
	// 		const res = await axios.get(`${baseUrl}/search`, {
	// 			params: {
	// 				q: 'good things',
	// 			},
	// 		});

	// 		const data = res.data.data;

	// 		dispatch({type: GET_SONGS, payload: data});

	// 	}catch(error){
	// 		console.log(error);
	// 	}
	// }

	// Search song by artist and song name
	const searchByName = async (songName) => {
		try {
			const res = await axios.get(`${baseUrl}/search`, {
				params: {
					q: `${songName}`,
				},
			});

            const data = res.data.data;
            dispatch({type: SEARCH_SONGS, payload: data});

		} catch (error) {
			console.log(error);
		}
	};

	// Play or pause the current song
	const togglePlaying = () =>{
		dispatch({type: TOGGLE_PLAYING, payload:state.playing? false : true})
	}

	//Resume the last song listened
	const setCurrentSong = (id) => {
		dispatch({type: SET_CURRENT_SONG, payload: id})
	}

	// Reproduce previous song
	const prevSong = () => {
		if(state.currentSong === 0){
			setCurrentSong(state.defaultSongs.length - 1);
		}else{
			setCurrentSong(state.currentSong - 1);
		}
	}

	// Reproduce next song
	const nextSong = () => {
		if(state.currentSong === state.defaultSongs.length - 1){
			setCurrentSong(0);
		}else{
			setCurrentSong(state.currentSong + 1);
		}
	}

	return (
		<SongContext.Provider
			value={{
				currentSong: state.currentSong,
				playing: state.playing,
				// selectedSong: state.selectedSong,
				audio: state.audio,
				resultSongs: state.resultSongs,
				defaultSongs: state.defaultSongs,
				// getRecomendedSongs,
				searchByName,
				togglePlaying,
				setCurrentSong,
				prevSong,
				nextSong,
			}}
		>
			{props.children}
		</SongContext.Provider>
	);
};

export default SongState;
