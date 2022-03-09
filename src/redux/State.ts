import {Movie} from "../model/movie";

export interface State {
    isCardClicked : boolean,
    movie_to_find : string,
    clicked_card : Movie,
    clicked_genre_filter: string
}

export const initialState: State = {
    isCardClicked  : false,
    movie_to_find : '',
    clicked_card : null as any,
    clicked_genre_filter : 'ALL'
}
