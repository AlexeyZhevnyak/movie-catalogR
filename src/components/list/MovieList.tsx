import MovieCard from "../movieCard/MovieCard";
import React from "react";

import {MovieListItem} from "../../model/movieListItem";
import {useNavigate} from "react-router-dom";
import {MovieFull} from "../../model/movieFull";

export function MovieList(props: {
    movies: MovieListItem[],
    className: string
}) {
    const navigate = useNavigate();
    return <div className={props.className}>
        {props.movies.map(m => <MovieCard movie={m} onClick={() => navigate(`/movies/${m._id}`)} key={m._id}/>)}
    </div>
}
