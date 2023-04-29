import {Movie} from "../model/movie";
import {MovieListItem} from "../model/movieListItem";

export interface State {
    movies: MovieListItem[]
    movies_to_find: MovieListItem[],
    clicked_genre_filter: string,
}