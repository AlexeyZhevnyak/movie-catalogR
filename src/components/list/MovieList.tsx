import {Movie} from "../../model/movie";
import MovieCard from "../movieCard/MovieCard";
import React from "react";
import {useNavigate} from "react-router";

export function MovieList(props: {
    movies: Movie[],
    className : string
}) {
    const navigate = useNavigate();
    return <div className={props.className}>
        {props.movies.map(m => <MovieCard movie={m} onClick={() => navigate(`${m._id}`)} key={m._id}/>)}
    </div>
}
