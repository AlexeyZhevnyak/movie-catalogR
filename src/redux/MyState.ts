import {Movie} from "../model/movie";

export interface MyState {
    isCardClicked : boolean,
    movie_to_find : string,
    clicked_card : Movie
}

export const initialState: MyState = {
    isCardClicked  : false,
    movie_to_find : '',
    clicked_card : null as any
}
