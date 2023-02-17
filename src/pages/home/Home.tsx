import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import {VerticalMenu} from "../../components/menu/VerticalMenu";
import {MovieList} from "../../components/list/MovieList";
import {Route, Routes} from "react-router-dom";
import {MovieDetailsHeader} from "../../components/movieDetailsHeader/MovieDetailsHeader";

import {State} from "../../redux/State";
import {useSelector} from "react-redux/es/exports";
import {useDispatch} from "react-redux";
import {FindHeaderWrapper} from "../../wrappers/findHeaderWrapper";
import {AsideFilterMenu} from "../../wrappers/asideFilterMenu";
import {useMovieList} from "../../hooks/getMovieList";
import {MovieListItem} from "../../model/movieListItem";

export function Home() {
    const findMovies = useSelector((state: State) => state.movie_to_find);
    useEffect(() => {
        setMoviesToView(findMovies);
    }, [findMovies])
    const dispatch = useDispatch();
    const movies = useMovieList();
    const [moviesToView, setMoviesToView] = useState<MovieListItem[]>([...movies]);
    useEffect(() => {
        setMoviesToView(movies);
        dispatch({
            type: 'DOWNLOAD_ALL_MOVIES',
            payload: movies
        })
    }, [movies])

    return (
        <div className={styles.wrapper}>
            <FindHeaderWrapper/>
            <VerticalMenu className={styles.filter_sort_menu}>
            </VerticalMenu>
            <div className={styles.menu_list}>
                <AsideFilterMenu></AsideFilterMenu>
                <MovieList className={styles.cards} movies={moviesToView}/>
            </div>
        </div>
    );
}