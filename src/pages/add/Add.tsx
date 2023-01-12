import styles from "../../components/movieForm/MovieForm.module.css"
import React from "react";
import {MovieForm} from "../../components/movieForm/MovieForm";
import {AddMovieDTO} from "../../model/add-movie-dto";

export function Add() {
    let movie = {
        _id: 0,
        _title: "",
        _genres: ["Test"],
        _vote_count: 0,
        _vote_average: 0,
        _tagline: "",
        _runtime: 0,
        _revenue: 0,
        _overview: "",
        _budget: 0,
        _release_date: "",
        _poster_path: ""
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
