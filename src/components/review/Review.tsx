import React from 'react';
import styles from './Review.module.scss';
import {formatDate} from "../../data";

export const Review = ({
                           moviePoster,
                           movieTitle,
                           likes,
                           timestamp,
                           text,
                           movieYear,
                       }: {
    moviePoster: string;
    movieTitle: string;
    text: string;
    likes: number;
    timestamp: string;
    movieYear: string;
}) => {
    return (
        <div className={styles.review}>
            <img src={moviePoster} alt={movieTitle}/>
            <div className={styles.info}>
                <div className={styles.meta}>
                    <div className={styles.title}>{movieTitle}</div>
                    <div style={{fontWeight: '100', fontSize: '1.2rem'}} className={styles.movieYear}>{movieYear}</div>
                </div>
                <div className={styles.text}>{text}</div>
                <div className={styles.meta}>
                    <div className={styles.likes}>
            <span role="img" aria-label="likes">
              👍
            </span>
                        <span>{likes}</span>
                    </div>
                    <div className={styles.timestamp}>{formatDate(timestamp)}</div>
                </div>
            </div>
        </div>
    );
};
