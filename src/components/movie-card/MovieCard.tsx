import logo from '../../logo192.png';
import styles from './MovieCard.module.css'
import {Movie} from "../../model/movie";

function MovieCard(props : Movie) {
    return (
        <div className={styles.outer}>
            <img src={props.poster_path} className={styles.poster} alt={'poster'}/>
            <div className={styles.movie_details}>
                <div className={styles.title_year}>
                    <h3 className={styles.movie_title}>{props.title}</h3>
                    <h3 className={styles.year}>{props.release_date}</h3>
                </div>
                <p id="genres">{props.genres.join(', ')}</p>
            </div>
        </div>

    )
}

export default MovieCard;

