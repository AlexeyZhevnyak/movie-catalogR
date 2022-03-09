import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "./MovieForm.module.css";
import React from "react";

export function MovieForm(props: {
    movie: AddMovieDTO,
    onSubmitEvent: (movie: AddMovieDTO) => void
}) {
    let movieToSend: AddMovieDTO = null as any;
    movieToSend = JSON.parse(JSON.stringify(props.movie));
    const setValue = (event: React.KeyboardEvent, field: keyof AddMovieDTO) => {
        const element = event.target as HTMLSelectElement;
        movieToSend[field] = element.value as never;
    }
    return (
        <form method="post" className={styles.container}>
            <div>
                <label>TITLE</label>
                <input type={"text"} value={movieToSend.title}
                       onKeyUp={(event) => setValue(event, "title")}/>
            </div>
            <div>
                <label>RELEASE DATE</label>
                <input type="date" value={movieToSend.release_date} onKeyUp={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>MOVIE URL</label>
                <input type="text" value={movieToSend.poster_path} onKeyUp={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>OVERVIEW</label>
                <input type="text" value={movieToSend.overview} onKeyUp={(event) => setValue(event, "overview")}/>
            </div>
            <div>
                <label>RUNTIME</label>
                <input type="text" value={movieToSend.runtime} onKeyUp={(event) => setValue(event, "runtime")}/>
            </div>
            <div>
                <label>REVENUE</label>
                <input type="text" value={movieToSend.revenue.toString()} onKeyUp={(event) => setValue(event, "revenue")}/>
            </div>
            <div>
                <label>TAGLINE</label>
                <input type="text" value={movieToSend.tagline} onKeyUp={(event) => setValue(event, "tagline")}/>
            </div>
            <div>
                <label>VOTE AVERAGE</label>
                <input type="text" value={movieToSend.vote_average.toString()} onKeyUp={(event) => setValue(event, "vote_average")}/>
            </div>
            <div>
                <label>VOTE COUNT</label>
                <input type="text" value={movieToSend.vote_count.toString()} onKeyUp={(event) => setValue(event, "vote_count")}/>
            </div>
            <div className={styles.buttons}>
                <button>RESET</button>
                <input type={"submit"} onSubmit={() => props.onSubmitEvent(movieToSend)}/>
            </div>
        </form>
    )
}
