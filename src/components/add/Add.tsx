import styles from "../form/MovieForm.module.css"
import React, {useState} from "react";
import {Movie} from "../../model/movie";
import axios from "axios";
import {MovieForm} from "../form/MovieForm";

export function Add() {
    let movie = {
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

    const sendMovie = () => {
        console.log(movie)
        fetch("http://localhost:4000/movies", {
            method: 'POST',
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(movie)
        })
            .then(res => console.log(res))
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>ADD MOVIE</h1>
            <MovieForm movie={movie} onClickEvent={sendMovie}/>
        </div>
    )
}
