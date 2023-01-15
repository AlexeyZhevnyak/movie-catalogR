import React, {useEffect, useState} from "react";
import {Movie} from "../../model/movie";
import {useDownloadMovies} from "../../hooks/DownloadMovies";
import {SelectOption} from "../../model/selectOption";
import styles from "./Home.module.css";
import {VerticalMenu} from "../../components/menu/VerticalMenu";
import {GenreList} from "../../components/genreList/GenreList";
import {SelectSort} from "../../components/selectSort/SelectSort";
import {MovieList} from "../../components/list/MovieList";
import {genres} from "../../model/genres";
import {Route, Routes} from "react-router-dom";
import {MovieDetailsHeader} from "../../components/movieDetailsHeader/MovieDetailsHeader";
import {AsideFilterMenu} from "../../components/asideFilterMenu/asideFilterMenu";

import {State} from "../../redux/State";
import {useSelector} from "react-redux/es/exports";
import {useDispatch} from "react-redux";
import {FindHeaderWrapper} from "../../wrappers/findHeaderWrapper";

export function Home() {
    const findMovies = useSelector((state: State) => {
        return state.movie_to_find;
    });
    useEffect(() => {
        setMoviesToView(findMovies);
    }, [findMovies])
    const dispatch = useDispatch();
    const movies = useDownloadMovies();
    const [moviesToView, setMoviesToView] = useState<Movie[]>([...movies]);
    useEffect(() => {
        setMoviesToView(movies);
        dispatch({
            type: 'DOWNLOAD_ALL_MOVIES',
            payload: movies
        })
    }, [movies])
    const sortFunction = (event: React.MouseEvent<Element, MouseEvent>) => {
        const element = event.target as HTMLSelectElement;
        const field = element.value as keyof Movie;
        if (field === "_release_date") {
            setMoviesToView([...movies.sort((a: Movie, b: Movie) => new Date(a[field]).getTime() - new Date(b[field]).getTime())])
        } else
            setMoviesToView([...movies.sort((a: Movie, b: Movie) => Number(a[field]) - Number(b[field]))])
    }

    const sortFields: SelectOption[] = [
        {
            title: "Votes",
            field: "_vote_average"
        },
        {
            title: "Release date",
            field: "_release_date"
        },
        {
            title: "Budget",
            field: "_budget"
        },
        {
            title: "Revenue",
            field: "_revenue"
        },
        {
            title: "Runtime",
            field: "_runtime"
        }
    ];

    const filterMovies = (event: React.MouseEvent<Element, MouseEvent>) => {
        const target = event.target as HTMLElement;
        let temp = Array.from(movies);

        if (target.innerText !== "All")
            temp = movies.filter(m => m._genres.includes(target.innerText))

        setMoviesToView([...temp]);
    }

    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path="" element={<FindHeaderWrapper/>}/>
                <Route path="/:id" element={<MovieDetailsHeader/>}/>
            </Routes>


            <VerticalMenu className={styles.filter_sort_menu}>
                <GenreList className={styles.genres} items={genres} onClick={(event) => filterMovies(event)}/>
                <SelectSort className={styles.select_sort} sortFields={sortFields} sortFunction={sortFunction}/>
            </VerticalMenu>
            {/*<div style={{alignSelf: "flex-start"}}>{moviesToView.length} movies found</div>*/}
            <div className={styles.menu_list}>
                <AsideFilterMenu></AsideFilterMenu>
                <MovieList className={styles.cards} movies={moviesToView}/>
            </div>
        </div>
    );
}