import {MovieListItem} from "../model/movieListItem";
import {MovieFull} from "../model/movieFull";
import {Review} from "../model/review";

export interface State {
    movies: MovieListItem[]
    movies_to_find: MovieListItem[],
    clicked_genre_filter: string,
    currentMovie: MovieFull,
    actualMovies: MovieFull[]
    reviews: Review[]
}