import {MovieListItem} from "../model/movieListItem";
import {MovieFull} from "../model/movieFull";
import {Review} from "../model/review";
import {User} from "../model/user";

export interface State {
    movies: MovieListItem[],
    movies_to_find: MovieListItem[],
    clicked_genre_filter: string,
    currentMovie: MovieFull,
    actualMovies: MovieFull[],
    reviews: Review[],
    user: User
}