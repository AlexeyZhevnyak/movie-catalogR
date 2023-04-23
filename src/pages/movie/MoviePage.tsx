import {useParams} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./MoviePage.module.scss"
import {MovieFull} from "../../model/movieFull";

export const MoviePage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieFull>();
    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data);
            })
    }, []);
    const getDirectorsName = () => {
        let t =  movie?.persons
            .filter(p => p.profession === 'режиссеры')
            .map(p => p.name)
            .join(', ')
        return t;
    }
    return <div className={styles.wrapper}>
        <div className={styles.main_content}>
            <div>
                <img src={movie?.poster.previewUrl} style={{
                    width: '230px',
                    height: '345px'
                }}/>
            </div>
            <div className={styles.col75}>
                <div className={styles.col75_row1}>
                    <div style={{
                        margin: '0px',
                        fontSize: '2rem',
                        fontWeight: '900'
                    }}>{movie?.name}</div>
                    <div style={{textDecoration: 'underline'}}>{movie?.year}</div>
                    <div>Режиссеры</div>
                    <div style={{textDecoration: 'underline'}}>{getDirectorsName()}</div>
                </div>
                <div>{movie?.slogan}</div>
                <div style={{fontSize: '14px'}}>{movie?.description}</div>
                <div style={{fontSize: '12px'}}>{movie?.movieLength} минут</div>
            </div>
        </div>
    </div>;
}