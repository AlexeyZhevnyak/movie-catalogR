import {Movie} from "../../model/movie";
import styles from "./MovieDetailsHeader.module.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router";

export function MovieDetailsHeader() {
    let params = useParams();
    const [movie, setMovie] = useState<Movie>({
        id: 0,
        title: "",
        genres: ["Test"],
        vote_count: 0,
        vote_average: 0,
        tagline: "",
        runtime: 0,
        revenue: 0,
        overview: "",
        budget: 0,
        release_date: "",
        poster_path: ""
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
                <img src={movie.poster_path} alt={"poster"}/>
                <div className={styles.details}>
                    <div className={styles.title_vote}>
                        <h1>{movie.title}</h1>
                        <h1>{movie.vote_average}</h1>
                    </div>
                    <div className={styles.year_runtime}>
                        <div>{new Date(movie.release_date).getFullYear()}</div>
                        <div>{movie.runtime} min</div>
                    </div>
                    <div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
