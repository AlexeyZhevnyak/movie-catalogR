import {useParams} from "react-router";
import axios from "axios";
import {useEffect} from "react";

export const MoviePage = () => {
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    // setMovies(result)
                })
    }, [])
    return <div>
        aga
    </div>;
}