import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "../../components/movieForm/MovieForm.module.css";
import {MovieForm} from "../../components/movieForm/MovieForm";
import React, {useContext} from "react";
import {StoreContext} from "../../components/app/App";

export function Edit() {
    const sendMovie = (movieDto: AddMovieDTO) => {
        fetch("http://localhost:4000/movies", {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieDto)
        })
            .then(res => console.log(res))

    }
    const store = useContext(StoreContext);
    let movieDto: AddMovieDTO = {
        title: "",
        genres: ["Test"],
        vote_count: 0,
        vote_average: 0,
        tagline: "",
        runtime: 0,
        revenue: 0,
        overview: "",
        budget: 0,
        release_date: "",
        poster_path: ""
    };
    let movie = store.getState().movie_to_edit;
    movieDto.tagline = movie.tagline;
    movieDto.revenue = movie.revenue;
    movieDto.vote_count = movie.vote_count;
    movieDto.runtime = movie.runtime;
    movieDto.title = movie.title;
    movieDto.vote_average = movie.vote_average;
    movieDto.overview = movie.overview;
    movieDto.genres = movie.genres;
    movieDto.release_date = movie.release_date;
    movieDto.budget = movie.budget;
    movieDto.poster_path = movie.poster_path;


    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>ADD MOVIE</h1>
            <MovieForm movie={movieDto} onSubmitEvent={sendMovie}/>
        </div>
    )
}
