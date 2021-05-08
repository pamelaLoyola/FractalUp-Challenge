import { GET_SONGS, SEARCH_SONGS, TOGGLE_PLAYING, SET_CURRENT_SONG } from "../types";

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_SONGS:
			return {
				...state,
				defaultSongs: payload,
			};
		case SEARCH_SONGS:
			return {
				...state,
				resultSongs: payload,
			};
		case TOGGLE_PLAYING:
			return{
				...state,
				playing: payload,
			}
		case SET_CURRENT_SONG:
			return{
				...state,
				currentSong: payload,
				playing:true,
			}
		default:
			return state;
	}
};
