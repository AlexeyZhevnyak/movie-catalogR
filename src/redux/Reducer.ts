import {State} from "./State";
import {Action} from "./Action";

export function reducer(state: State, action: Action): State {
    if (action.type === 'DOWNLOAD_ALL_MOVIES') {
        state.movies = action.payload;
        return state;
    }

    if (action.type === 'CARD_CLICK') {
        state.is_card_clicked = true;
        state.clicked_card = action.payload
        return state
    }

    if (action.type === 'MOVIE_FIND_KEYDOWN') {
        let t;
        if (action.payload === '') {
            return {
                ...state,
                movie_to_find: state.movies
            };
        } else {
            t = state.movies.filter(m => m._title.toUpperCase().includes(action.payload.toUpperCase()));
        }
        return {
            ...state,
            movie_to_find: t
        };
    }

    if (action.type === 'SWITCH_TO_FIND_CLICK') {
        state.is_card_clicked = false
    }

    if (action.type === 'GENRE_FILTER_CLICK') {

    }

    if (action.type === 'EDIT_MOVIE_CLICK') {
        state.movie_to_edit = action.payload
    }
    return state
}
