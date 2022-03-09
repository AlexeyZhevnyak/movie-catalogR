import React, {useContext, useState} from "react";
import {Movie} from "../../model/movie";
import {useDownloadMovies} from "../../hooks/DownloadMovies";
import {SelectOption} from "../../model/selectOption";
import styles from "./Home.module.css";
import {MovieDetailsHeader} from "../../components/movieDetailsHeader/MovieDetailsHeader";
import {FindHeader} from "../../components/findHeader/FindHeader";
import {VerticalMenu} from "../../components/menu/VerticalMenu";
import {GenreList} from "../../components/genreList/GenreList";
import {SelectSort} from "../../components/selectSort/SelectSort";
import {MovieList} from "../../components/list/MovieList";
import {StoreContext} from "../../components/app/App";
import {genres} from "../../model/genres";

export function Home() {
    const store = useContext(StoreContext);
    const [moviesToView, setMoviesToView] = useState<Movie[]>([])

    const movies = useDownloadMovies("http://localhost:4000/movies?limit=12");

    const sortFunction = (event: React.MouseEvent<Element, MouseEvent>) => {
        const element = event.target as HTMLSelectElement;
        const field = element.value as keyof Movie;
        if (field === "release_date") {
            setMoviesToView([...movies.sort((a: Movie, b: Movie) => new Date(a[field]).getTime() - new Date(b[field]).getTime())])
        } else
            setMoviesToView([...movies.sort((a: Movie, b: Movie) => Number(a[field]) - Number(b[field]))])
    }


    const sortFields: SelectOption[] = [
        {
            title: "Votes",
            field: "vote_average"
        },
        {
            title: "Release date",
            field: "release_date"
        },
        {
            title: "Budget",
            field: "budget"
        },
        {
            title: "Revenue",
            field: "revenue"
        },
        {
            title: "Runtime",
            field: "runtime"
        }
    ];
    const firstRender = () => {
        if (moviesToView.length === 0)
            return movies
        return moviesToView
    }
    store.subscribe(() => {
            setMoviesToView(movies.filter(m =>
                m.title.toUpperCase().includes(store.getState().movie_to_find.toUpperCase())))
        }
    )

    const filterMovies = (event: React.MouseEvent<Element, MouseEvent>) => {
        const target = event.target as HTMLElement;
        let temp = Array.from(movies);

        if (target.innerText !== "All")
            temp = movies.filter(m => m.genres.includes(target.innerText))

        setMoviesToView([...temp]);
    }

    return (
            <div className={styles.wrapper}>
                {store.getState().is_card_clicked ?
                    <MovieDetailsHeader onClick={() => store.dispatch({type: 'SWITCH_TO_FIND_CLICK'})}
                                        movie={store.getState().clicked_card}/> :
                    <FindHeader/>}
                <VerticalMenu className={styles.filter_sort_menu}>
                    <GenreList className={styles.genres} items={genres} onClick={(event) => filterMovies(event)}/>
                    <SelectSort className={styles.select_sort} sortFields={sortFields} sortFunction={sortFunction}/>
                </VerticalMenu>
                <div style={{alignSelf: "center"}}>{moviesToView.length} movies found</div>
                <MovieList className={styles.cards} movies={firstRender()}/>
            </div>
    );
}
