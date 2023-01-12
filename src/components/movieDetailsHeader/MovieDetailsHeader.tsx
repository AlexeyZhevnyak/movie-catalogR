import {Movie} from "../../model/movie";
import styles from "./MovieDetailsHeader.module.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router";

export function MovieDetailsHeader() {
    let params = useParams();
    const [movie, setMovie] = useState<Movie>({
        _id: 0,
        _title: "",
        _genres: ["Test"],
        _vote_count: 0,
        _vote_average: 0,
        _tagline: "",
        _runtime: 0,
        _revenue: 0,
        _overview: "",
        _budget: 0,
        _release_date: "",
        _poster_path: ""
    });

    useEffect(() => {
        fetch(`http://localhost:4000/movies/${params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovie(data)
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_backButton}>
                <div>logo</div>
                <button>back</button>
            </div>
            <div className={styles.poster_details}>
                <img src={movie._poster_path} alt={"poster"}/>
                <div className={styles.details}>
                    <div className={styles.title_vote}>
                        <h1>{movie._title}</h1>
                        <h1>{movie._vote_average}</h1>
                    </div>
                    <div className={styles.year_runtime}>
                        <div>{new Date(movie._release_date).getFullYear()}</div>
                        <div>{movie._runtime} min</div>
                    </div>
                    <div>
                        <p>{movie._overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
