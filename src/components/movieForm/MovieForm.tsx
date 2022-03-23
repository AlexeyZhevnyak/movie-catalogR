import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "./MovieForm.module.css";
import React, {useState} from "react";

export function MovieForm(props: {
    movie: AddMovieDTO,
    onSubmitEvent: (movie: AddMovieDTO) => void
}) {
    const [movieToSend, setMovieToSend] = useState<AddMovieDTO>(JSON.parse(JSON.stringify(props.movie)))

    const setValue = (event: React.ChangeEvent, field: keyof AddMovieDTO) => {
        const element = event.target as HTMLSelectElement;
        setMovieToSend(prevState => ({
            ...prevState,
            [field]: element.value
        }));
    }
    return (
        <form method="post" className={styles.container}>
            <div>
                <label>TITLE</label>
                <input type={"text"} value={movieToSend.title}
                       onChange={(event) => setValue(event, "title")}/>
            </div>
            <div>
                <label>RELEASE DATE</label>
                <input type="date" value={movieToSend.release_date}
                       onChange={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>MOVIE URL</label>
                <input type="text" value={movieToSend.poster_path}
                       onChange={(event) => setValue(event, "release_date")}/>
            </div>
            <div>
                <label>OVERVIEW</label>
                <input type="text" value={movieToSend.overview} onChange={(event) => setValue(event, "overview")}/>
            </div>
            <div>
                <label>RUNTIME</label>
                <input type="text" value={movieToSend.runtime} onChange={(event) => setValue(event, "runtime")}/>
            </div>
            <div>
                <label>REVENUE</label>
                <input type="text" value={movieToSend.revenue.toString()}
                       onChange={(event) => setValue(event, "revenue")}/>
            </div>
            <div>
                <label>TAGLINE</label>
                <input type="text" value={movieToSend.tagline} onChange={(event) => setValue(event, "tagline")}/>
            </div>
            <div>
                <label>VOTE AVERAGE</label>
                <input type="text" value={movieToSend.vote_average.toString()}
                       onChange={(event) => setValue(event, "vote_average")}/>
            </div>
            <div>
                <label>VOTE COUNT</label>
                <input type="text" value={movieToSend.vote_count.toString()}
                       onChange={(event) => setValue(event, "vote_count")}/>
            </div>
            <div className={styles.buttons}>
                <button>RESET</button>
                <input type={"submit"} onSubmit={() => props.onSubmitEvent(movieToSend)}/>
            </div>
        </form>
    )
}
