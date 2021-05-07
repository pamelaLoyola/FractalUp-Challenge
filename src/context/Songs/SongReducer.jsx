import { GET_SONGS, SEARCH_SONGS } from "../types";

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

		default:
			return state;
	}
};
