import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "./MovieForm.module.css";
import React from "react";

export function MovieForm(props: {
    movie: AddMovieDTO,
    onSubmitEvent: (movie: AddMovieDTO) => void
}) {
    let movieToSend: AddMovieDTO = null as any;
    Object.assign(movieToSend, props.movie)
    const setValue = (event: React.MouseEvent<Element, MouseEvent>, field: keyof AddMovieDTO) => {
        const element = event.target as HTMLSelectElement;
        movieToSend[field] = element.value as never;
    }
    return (
        <form method="post" className={styles.container}>
            <div>
                <label>TITLE</label>
                <input type={"text"}
                       onClick={(event) => setValue(event, "title")}/>
            </div>
            <div>
                <label>RELEASE DATE</label>
                <input type="date" onClick={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>MOVIE URL</label>
                <input type="text" onClick={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>OVERVIEW</label>
                <input type="text" onClick={(event) => setValue(event, "overview")}/>
            </div>
            <div>
                <label>RUNTIME</label>
                <input type="text" onClick={(event) => setValue(event, "runtime")}/>
            </div>
            <div>
                <label>REVENUE</label>
                <input type="text" onClick={(event) => setValue(event, "revenue")}/>
            </div>
            <div>
                <label>TAGLINE</label>
                <input type="text" onClick={(event) => setValue(event, "tagline")}/>
            </div>
            <div>
                <label>VOTE AVERAGE</label>
                <input type="text" onClick={(event) => setValue(event, "vote_average")}/>
            </div>
            <div>
                <label>VOTE COUNT</label>
                <input type="text" onClick={(event) => setValue(event, "vote_count")}/>
            </div>
            <div className={styles.buttons}>
                <button>RESET</button>
                <input type={"submit"} onClick={() => props.onSubmitEvent(movieToSend)}/>
            </div>
        </form>
    )
}
