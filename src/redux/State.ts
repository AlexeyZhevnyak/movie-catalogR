import {Movie} from "../model/movie";

export interface State {
    is_card_clicked: boolean,
    movie_to_find: string,
    clicked_card: Movie,
    clicked_genre_filter: string,
    movie_to_edit: Movie;
}

export const initialState: State = {
    is_card_clicked: false,
    movie_to_find: '',
    clicked_card: null as any,
    clicked_genre_filter: 'ALL',
    movie_to_edit: {
        title: "Title",
        genres: ["Test"],
        vote_count: 200,
        vote_average: 2.4,
        tagline: "Tagline",
        runtime: 200,
        revenue: 0,
        overview: "",
        budget: 0,
        release_date: "",
        poster_path: "",
        id : 0
    }
}
