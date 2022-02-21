import {MyState} from "./MyState";
import {MyAction} from "./MyAction";

export function reducer(state: MyState, action : MyAction) : MyState{
    if (action.type === 'CARD_CLICK'){
        state.isCardClicked = true;
        state.clicked_card = action.payload
        return state
    }

    if (action.type === 'MOVIE_FIND_KEYDOWN'){
        state.movie_to_find = action.payload
        return state;
    }
    return state
}
