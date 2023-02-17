import MovieCard from "../movieCard/MovieCard";
import React from "react";
import {useNavigate} from "react-router";
import {MovieListItem} from "../../model/movieListItem";
import {redirect} from "react-router-dom";

export function MovieList(props: {
    movies: MovieListItem[],
    className: string
}) {
    const navigate = useNavigate();
    return <div className={props.className}>
        {props.movies.map(m => <MovieCard movie={m} onClick={() => navigate(`${m._id}`)} key={m._id}/>)}
    </div>
}
