import {Movie} from "../../model/movie";
import styles from "./MovieDetailsHeader.module.css"
import {MouseEventHandler} from "react";

export function MovieDetailsHeader(props: {
    movie: Movie,
    onClick : MouseEventHandler
}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_backButton}>
                <div>logo</div>
                <button onClick={props.onClick}>back</button>
            </div>
            <div className={styles.poster_details}>
                <img src={props.movie.poster_path} alt={"poster"}/>
                <div className={styles.details}>
                    <div className={styles.title_vote}>
                        <h1>{props.movie.title}</h1>
                        <h1>{props.movie.vote_average}</h1>
                    </div>
                    <div className={styles.year_runtime}>
                        <div>{new Date(props.movie.release_date).getFullYear()}</div>
                        <div>{props.movie.runtime} min</div>
                    </div>
                    <div>
                        <p>{props.movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
