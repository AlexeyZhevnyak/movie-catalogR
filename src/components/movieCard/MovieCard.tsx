import styles from './MovieCard.module.scss'
import {Movie} from "../../model/movie";
import {MouseEventHandler} from "react";
import {MovieCardMenu} from "../movieCardMenu/MovieCardMenu";

function MovieCard(props: {
    movie: Movie,
    onClick: MouseEventHandler
}) {
    return (
        <div className={styles.outer} onClick={props.onClick}>
            <MovieCardMenu movie={props.movie} className = {styles.movie_card_menu}/>
            <img src={props.movie.poster_path} className={styles.poster} alt={'poster'}/>
            <div className={styles.movie_details}>
                <div className={styles.title_year}>
                    <h3 className={styles.movie_title}>{props.movie.title}</h3>
                    <h3 className={styles.year}>{props.movie.release_date}</h3>
                </div>
                <p id="genres">{props.movie.genres.join(', ')}</p>
            </div>
        </div>
    )
}

export default MovieCard;

