import React, {useEffect} from "react";
import styles from "./Movies.module.css";
import {VerticalMenu} from "../../components/menu/VerticalMenu";
import {MovieList} from "../../components/list/MovieList";

import {State} from "../../redux/State";
import {useSelector} from "react-redux/es/exports";
import {AsideFilterMenu} from "../../wrappers/asideFilterMenu";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/Store";
import {fetchMovies} from "../../redux/actionCreators";

export function Movies() {
    const dispatch = useDispatch<AppDispatch>();
    const movies_to_find = useSelector((state: State) => state.movies_to_find);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <VerticalMenu className={styles.filter_sort_menu}>
            </VerticalMenu>
            <div className={styles.menu_list}>
                <AsideFilterMenu></AsideFilterMenu>
                <MovieList className={styles.cards} movies={movies_to_find}/>
            </div>
        </div>
    );
}