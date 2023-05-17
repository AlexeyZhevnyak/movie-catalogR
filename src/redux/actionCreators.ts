import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch('http://localhost:3000/movies/list');
        return response.json();
    }
);

export const fetchReviews = createAsyncThunk(
    'movies/fetchReviews',
    async () => {
        const response = await fetch('http://localhost:3000/reviews/');
        return response.json();
    }
);

export const fetchActualMovies = createAsyncThunk(
    'movies/fetchActualMovies',
    async () => {
        console.log('lox')
        const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie', {
            params: {
                token: 'P5KPXSA-Q1H423N-PFVHART-RPKHG4A',
                selectFields: 'id name alternativeName enName type typeNumber year description shortDescription slogan status rating votes movieLength ratingMpaa ageRating logo poster backdrop genres countries persons reviewInfo seasonsInfo budget fees premiere similarMovies sequelsAndPrequels watchability releaseYears top10 top250 facts',
                sortField: 'votes.kp',
                limit: '10',
                type: 'movie',
                'premiere.world': getLastMonthPeriod()
            }
        });
        return response.data.docs;
    }
);

function getLastMonthPeriod() {
    const today = new Date();
    const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}.${month}.${year}`;
    }

    return `${formatDate(oneMonthAgo)}-${formatDate(today)}`;
}