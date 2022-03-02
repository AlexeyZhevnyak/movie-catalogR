import {Movie} from "../../model/movie";
import MovieCard from "../movie-card/MovieCard";
import React, {useContext} from "react";
import {StoreContext} from "../app/App";

export function MovieList(props: {
    movies: Movie[],
    className : string
}) {
    const store = useContext(StoreContext);
    return <div className={props.className}>
        {props.movies.map(m => <MovieCard movie={m} onClick={() => store.dispatch({
            type: 'CARD_CLICK',
            payload: m
        })} key={m.id}/>)}
    </div>
}
