import {Movie} from "../../model/movie";

export function MovieDetailsHeader(props : {movie: Movie}) {

    return (
        <div>
            <h1>{props.movie.title}</h1>
        </div>
    )
}
