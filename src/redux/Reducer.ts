import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "../model/movie";
import {MovieListItem} from "../model/movieListItem";
import {fetchMovies} from "./actionCreators";
import {State} from "./State";
import {Action} from "./Action";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        is_card_clicked: false,
        movies_to_find: [],
        clicked_card: {} as Movie,
        clicked_genre_filter: 'Все жанры',
        movie_to_edit: {} as Movie,
    },
    reducers: {
        downloadAllMovies: (state: State, action: PayloadAction<MovieListItem[]>) => {
            state.movies = action.payload;
        },
        filterByGenre: (state: State, action: PayloadAction<string>) => {
            if (action.payload === 'Все жанры') {
                state.movies_to_find = state.movies;
            } else {
                state.movies_to_find = state.movies.filter((m) =>
                    m._genres.includes(action.payload)
                );
            }
        },
        filterByCountry: (state: State, action: PayloadAction<string>) => {
            if (action.payload === 'Все страны') {
                state.movies_to_find = state.movies;
            } else {
                state.movies_to_find = state.movies.filter(
                    (m) =>
                        m._countries.filter((country) => country.name === action.payload)
                            .length > 0
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state: State) => {
            // обновляем состояние, когда запрос на получение данных отправлен
            state.movies = [];
            state.movies_to_find = [];
        });
        builder.addCase(fetchMovies.fulfilled, (state: State, action: Action) => {
            // сохраняем полученные данные, когда запрос на получение данных успешно завершен
            state.movies = action.payload;
            state.movies_to_find = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state: State) => {
            // обновляем состояние в случае, если запрос на получение данных завершился ошибкой
            state.movies = [];
            state.movies_to_find = [];
        });
    },
});

export const {
    downloadAllMovies,
    filterByGenre,
    filterByCountry,
} = movieSlice.actions;

export default movieSlice.reducer;
