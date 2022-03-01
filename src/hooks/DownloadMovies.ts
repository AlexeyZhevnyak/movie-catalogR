import {Movie} from "../model/movie";
import {useEffect, useRef, useState} from "react";

export function useDownloadMovies(url: string): Movie[] {
    const [movies, setMovies] = useState<Movie[]>([])
    // let movies : Movie[] = [];
    const test = useRef<Movie[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/movies?limit=12")
            .then(res => res.json())
            .then(
                (result) => {
                   test.current = result.data;
                   setMovies(result.data)
                })
    }, [])

    return movies;
}
