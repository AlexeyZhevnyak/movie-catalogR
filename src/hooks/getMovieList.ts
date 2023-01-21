import {MovieListItem} from "../model/movieListItem";
import {useEffect, useState} from "react";

export const useMovieList = (): MovieListItem[] => {
    const [movies, setMovies] = useState<MovieListItem[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/movies/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setMovies(result)
                })
    }, [])

    return movies;
}