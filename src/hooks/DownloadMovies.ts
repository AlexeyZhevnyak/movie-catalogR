import {Movie} from "../model/movie";
import {useEffect, useRef, useState} from "react";

export function useDownloadMovies(): Movie[] {
    const [movies, setMovies] = useState<Movie[]>([])
    // let movies : Movie[] = [];
    const test = useRef<Movie[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies/")
            .then(res => res.json())
            .then(
                (result) => {
                   test.current = result;
                   setMovies(result)
                })
    }, [])

    return movies;
}
