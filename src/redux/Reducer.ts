import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchActualMovies, fetchMovies, fetchReviews} from "./actionCreators";
import {State} from "./State";
import {Action} from "./Action";
import {MovieFull} from "../model/movieFull";
import {User} from "../model/user";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        movies_to_find: [],
        clicked_genre_filter: 'Все жанры',
        currentMovie: {} as MovieFull,
        actualMovies: [],
        reviews: [],
        user: {} as User
    },
    reducers: {
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
        setCurrentMovie: (state: State, action: PayloadAction<MovieFull>) => {
            state.currentMovie = action.payload;
        },
        setUser: (state: State, action: PayloadAction<User>) => {
            state.user = action.payload;
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
        builder.addCase(fetchActualMovies.pending, (state: State) => {
            // обновляем состояние, когда запрос на получение данных отправлен

        });
        builder.addCase(fetchActualMovies.fulfilled, (state: State, action: Action) => {
            state.actualMovies = action.payload;
        });
        builder.addCase(fetchActualMovies.rejected, (state: State) => {
            // обновляем состояние в случае, если запрос на получение данных завершился ошибкой

        });
        builder.addCase(fetchReviews.fulfilled, (state: State, action: Action) => {
            state.reviews = action.payload;
        });
        builder.addCase(fetchReviews.rejected, (state: State) => {
            // обновляем состояние в случае, если запрос на получение данных завершился ошибкой
            console.log('ades');
        });
        builder.addCase(fetchReviews.pending, (state: State) => {
            // обновляем состояние, когда запрос на получение данных отправлен
            console.log('ades1');
        });
    },
});

export const {
    filterByGenre,
    filterByCountry,
    setCurrentMovie,
    setUser
} = movieSlice.actions;

export default movieSlice.reducer;
