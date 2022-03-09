import {State} from "./State";
import {Action} from "./Action";

export function reducer(state: State, action: Action): State {
    if (action.type === 'CARD_CLICK') {
        state.isCardClicked = true;
        state.clicked_card = action.payload
        return state
    }

    if (action.type === 'MOVIE_FIND_KEYDOWN') {
        state.movie_to_find = action.payload
        return state;
    }

    if (action.type === 'SWITCH_TO_FIND_CLICK') {
        state.isCardClicked = false
    }

    if (action.type === 'GENRE_FILTER_CLICK') {

    }
    return state
}
