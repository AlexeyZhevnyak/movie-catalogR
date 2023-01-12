import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "../../components/movieForm/MovieForm.module.css";
import {MovieForm} from "../../components/movieForm/MovieForm";
import React, {useContext} from "react";
import {StoreContext} from "../../components/app/App";

export function Edit() {
    const editMovie = (movieDto: AddMovieDTO) => {
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
    movieDto.tagline = movie._tagline;
    movieDto.revenue = movie._revenue;
    movieDto.vote_count = movie._vote_count;
    movieDto.runtime = movie._runtime;
    movieDto.title = movie._title;
    movieDto.vote_average = movie._vote_average;
    movieDto.overview = movie._overview;
    movieDto.genres = movie._genres;
    movieDto.release_date = movie._release_date;
    movieDto.budget = movie._budget;
    movieDto.poster_path = movie._poster_path;


    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>EDIT MOVIE</h1>
            <MovieForm movie={store.getState().movie_to_edit} onSubmitEvent={editMovie}/>
        </div>
    )
}
