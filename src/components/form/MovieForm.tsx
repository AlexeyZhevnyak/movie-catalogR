import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "./MovieForm.module.css";
import React from "react";

export function MovieForm(props : {
    movie : AddMovieDTO,
    onClickEvent : () => void
}) {
    return (
        <form method="post" className={styles.container}>
            <div>
                <label>TITLE</label>
                <input type={"text"}
                       onClick={(event) => {
                           const element = event.target as HTMLSelectElement;
                           props.movie.title = element.value;
                       }}/>
            </div>
            <div>
                <label>RELEASE DATE</label>
                <input type="date" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.release_date = element.value;
                }}/>
            </div>
            <div>
                <label>MOVIE URL</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.poster_path = element.value;
                }}/>
            </div>
            <div>
                <label>OVERVIEW</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.overview = element.value;
                }}/>
            </div>
            <div>
                <label>RUNTIME</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.runtime = Number(element.value);
                }}/>
            </div>
            <div>
                <label>REVENUE</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.revenue = Number(element.value);
                }}/>
            </div>
            <div>
                <label>TAGLINE</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.tagline = element.value;
                }}/>
            </div>
            <div>
                <label>VOTE AVERAGE</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.vote_average = Number(element.value);
                }}/>
            </div>
            <div>
                <label>VOTE COUNT</label>
                <input type="text" onClick={(event) => {
                    const element = event.target as HTMLSelectElement;
                    props.movie.vote_count = Number(element.value);
                }}/>
            </div>
            <div className={styles.buttons}>
                <button>RESET</button>
                <button onClick={props.onClickEvent}/>
            </div>
        </form>
    )
}
