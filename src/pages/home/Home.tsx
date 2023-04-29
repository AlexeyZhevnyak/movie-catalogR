import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import {VerticalMenu} from "../../components/menu/VerticalMenu";
import {MovieList} from "../../components/list/MovieList";

import {State} from "../../redux/State";
import {useSelector} from "react-redux/es/exports";
import {AsideFilterMenu} from "../../wrappers/asideFilterMenu";
import {MovieListItem} from "../../model/movieListItem";

export function Home() {
    const movies_to_find = useSelector((state: State) => state.movies_to_find);

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