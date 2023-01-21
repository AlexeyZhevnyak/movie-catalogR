import {Movie} from "../model/movie";
import {MovieListItem} from "../model/movieListItem";

export interface State {
    movies: MovieListItem[]
    is_card_clicked: boolean,
    movie_to_find: MovieListItem[],
    clicked_card: Movie,
    clicked_genre_filter: string,
    movie_to_edit: Movie;
}

export const initialState: State = {
    movies: [],
    is_card_clicked: false,
    movie_to_find: [],
    clicked_card: null as any,
    clicked_genre_filter: 'ALL',
    movie_to_edit: {
        _title: "Title",
        _genres: ["Test"],
        _vote_count: 200,
        _vote_average: 2.4,
        _tagline: "Tagline",
        _runtime: 200,
        _revenue: 0,
        _overview: "",
        _budget: 0,
        _release_date: "",
        _poster_path: "",
        _id: 0
    }
}
