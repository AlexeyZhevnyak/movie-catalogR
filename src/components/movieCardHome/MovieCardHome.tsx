import styles from './MovieCardHome.module.scss'
import {MouseEventHandler} from "react";
import {MovieListItem} from "../../model/movieListItem";
import {MovieFull} from "../../model/movieFull";

function MovieCardHome(props: {
    movie: MovieFull,
    onClick: MouseEventHandler
}) {
    return (
        <div className={styles.outer} onClick={props.onClick}>
            {/*<MovieCardMenu movie={props.movie} className = {styles.movie_card_menu}/>*/}
            <img src={props.movie.poster.previewUrl} className={styles.poster} alt={'poster'}/>
            <div className={styles.title_year}>
                <h3 className={styles.movie_title}>{props.movie.name}</h3>
                <h3 className={styles.year}>{props.movie.year}</h3>
            </div>
            <p id="genres">{props.movie.genres.map(g => g.name).join(', ')}</p>
        </div>
    )
}

export default MovieCardHome;

