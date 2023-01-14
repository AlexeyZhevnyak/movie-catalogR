import {AddMovieDTO} from "../../model/add-movie-dto";
import styles from "./MovieForm.module.css";
import React from "react";
import {useFormik} from "formik";
import {Movie} from "../../model/movie";

export function MovieForm(props: {
    movie: Movie,
    onSubmitEvent: (movie: AddMovieDTO) => void
}) {
    const formik = useFormik({
        initialValues: {
            id: props.movie._id,
            title: props.movie._title,
            genres: props.movie._genres,
            runtime: props.movie._runtime,
            overview: props.movie._overview,
            poster_path: props.movie._poster_path,
            release_date: props.movie._release_date,
            tagline: props.movie._tagline,
            vote_average: props.movie._vote_average,
            vote_count: props.movie._vote_count,
            budget: props.movie._budget,
            revenue: props.movie._revenue
        },
        onSubmit: values => {
            values.vote_average = Number(values.vote_average);
            values.vote_count = Number(values.vote_count);
            values.revenue = Number(values.revenue);
            values.runtime = Number(values.runtime);
            props.onSubmitEvent(values)
        },
    });
    return (
        <>
            <form method="post" className={styles.container} onSubmit={formik.handleSubmit}>
                <div>
                    <label>TITLE</label>
                    <input type={"text"} name={"title"} onChange={formik.handleChange} value={formik.values.title}/>
                </div>
                <div>
                    <label>RELEASE DATE</label>
                    <input type="date" name={"release_date"} onChange={formik.handleChange}
                           value={formik.values.release_date}/>
                </div>
                <div>
                    <label>MOVIE URL</label>
                    <input type="text" name={"poster_path"} onChange={formik.handleChange}
                           value={formik.values.poster_path}/>
                </div>
                <div>
                    <label>OVERVIEW</label>
                    <input type="text" name={"overview"} onChange={formik.handleChange} value={formik.values.overview}/>
                </div>
                <div>
                    <label>RUNTIME</label>
                    <input type="text" name={"runtime"} onChange={formik.handleChange} value={formik.values.runtime}/>
                </div>
                <div>
                    <label>REVENUE</label>
                    <input type="text" name={"revenue"} onChange={formik.handleChange}
                           value={formik.values.revenue.toString()}/>
                </div>
                <div>
                    <label>TAGLINE</label>
                    <input type="text" name={"tagline"} onChange={formik.handleChange} value={formik.values.tagline}/>
                </div>
                <div>
                    <label>VOTE AVERAGE</label>
                    <input type="text" name={"vote_average"} onChange={formik.handleChange}
                           value={formik.values.vote_average.toString()}/>
                </div>
                <div>
                    <label>VOTE COUNT</label>
                    <input type="text" name={"vote_count"} onChange={formik.handleChange}
                           value={formik.values.vote_count.toString()}/>
                </div>
                <div className={styles.buttons}>
                    <button>RESET</button>
                    <input type={"submit"}/>
                </div>
            </form>
        </>
    )
}
