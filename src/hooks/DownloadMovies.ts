import {Movie} from "../model/movie";
import {useEffect, useState} from "react";

export function useDownloadMovies(): Movie[] {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/movies/")
            .then(res => res.json())
            .then(
                (result) => {
                    setMovies(result)
                })
    }, [])

    return movies;
}
