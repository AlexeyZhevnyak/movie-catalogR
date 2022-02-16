import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import MovieCard from "../movie-card/MovieCard";
import {SelectOption} from "../../model/selectOption";
import {Movie} from "../../model/movie";

function App() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [genre, setGenre] = useState("");


    useEffect(() => {
        fetch("http://localhost:4000/movies?limit=12")
            .then(res => res.json())
            .then(
                (result) => {
                    setMovies(result.data);
                })
    }, [])


    const genres: string[] = [
        "All",
        "Drama",
        "Romance",
        "Animation",
        "Adventure",
        "Family",
        "Comedy",
        "Fantasy",
        "Science Fiction",
        "Action"
    ]

    const sortFields: SelectOption[] = [
        {
            title: "Votes",
            field: "vote_average"
        },
        {
            title: "Release date",
            field: "release_date"
        },
        {
            title: "Budget",
            field: "budget"
        },
        {
            title: "Revenue",
            field: "revenue"
        },
        {
            title: "Runtime",
            field: "runtime"
        }
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.filter_sort_menu}>
                <div className={styles.genres}>
                    {
                        genres.map(g => <div key={g} onClick={
                            () => setMovies(
                                movies.filter(m => m.genres.includes(g))
                            )
                        }
                        >{g}</div>)}
                </div>
                <div className={styles.select_sort}>
                    <span className={styles.sort_text}>SORT BY</span>
                    <select>
                        {sortFields.map(sf => <option key={sf.title}>{sf.title}</option>)}
                    </select>
                </div>
            </div>
            <div style={{alignSelf: "center"}}>{movies.length} movies found</div>
            <div className={styles.cards}>
                {movies.map(m => <MovieCard key={m.id} {...m}/>)}
            </div>
        </div>
    );
}


export default App;
