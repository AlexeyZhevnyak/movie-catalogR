import {Movie} from "../../model/movie";
import MovieCard from "../movie-card/MovieCard";
import React, {useContext} from "react";
import {StoreContext} from "../app/App";

export function MovieList(props: {
    movies: Movie[]
}) {
    const store = useContext(StoreContext);
    return <>
        {props.movies.map(m => <MovieCard movie={m} onClick={() => store.dispatch({
            type: 'CARD_CLICK',
            payload: m
        })} key={m.id}/>)}
    </>
}
