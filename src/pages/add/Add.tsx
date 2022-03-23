import styles from "../../components/movieForm/MovieForm.module.css"
import React from "react";
import {MovieForm} from "../../components/movieForm/MovieForm";
import {AddMovieDTO} from "../../model/add-movie-dto";

export function Add() {
    let movie = {
        id: 0,
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

    const sendMovie = (movieDto: AddMovieDTO) => {
        console.log(movieDto)
        fetch("http://localhost:4000/movies", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieDto)
        })
            .then(res => console.log(res))
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>ADD MOVIE</h1>
            <MovieForm movie={movie} onSubmitEvent={sendMovie}/>
        </div>
    )
}
