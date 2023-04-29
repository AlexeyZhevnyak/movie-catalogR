import {downloadAllMovies} from "./Reducer";
import {MovieListItem} from "../model/movieListItem";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch('http://localhost:3000/movies/list');
        return response.json();
    }
);