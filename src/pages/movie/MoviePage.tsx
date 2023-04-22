import {useParams} from "react-router";
import axios from "axios";
import {useEffect} from "react";
import styles from "./MoviePage.module.scss"

export const MoviePage = () => {
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response.data);
                // setMovies(response.data);
            })
    }, []);
    return <div className={styles.wrapper}>
        <div className={styles.main_content}>
            <p>Содержимое вашего центрированного div здесь</p>
            <p>Содержимое вашего центрированного div здесь</p>
            <p>Содержимое вашего центрированного div здесь</p>
            <p>Содержимое вашего центрированного div здесь</p>
        </div>
    </div>;
}