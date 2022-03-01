import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import MovieCard from "../movie-card/MovieCard";
import {SelectOption} from "../../model/selectOption";
import {Movie} from "../../model/movie";
import {createStore} from "redux";
import {reducer} from "../../redux/reducer";
import {initialState} from "../../redux/State";
import {FindHeader} from "../find-header/FindHeader";
import {MovieDetailsHeader} from "../movieDetailsHeader/MovieDetailsHeader";
import {Route, Router} from "react-router";
import {MovieList} from "../list/MovieList";
import {GenreList} from "../GenreList/GenreList";
import {SelectSort} from "../SelectSort/SelectSort";
import {useDownloadMovies} from "../../hooks/DownloadMovies";

const store = createStore(reducer as any, initialState,)
export const StoreContext = React.createContext(store);

function App() {

    // const [movies, setMovies] = useState<Movie[]>([])
    const [tempMovies, setTempMovies] = useState<Movie[]>([])

    var movies = useDownloadMovies("http://localhost:4000/movies?limit=12");
    // setTempMovies(movies)
    // useEffect(() => {
    //     fetch("http://localhost:4000/movies?limit=12")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setMovies(result.data);
    //                 setTempMovies(result.data.sort((a: Movie, b: Movie) => Number(a[sortFields[0].field]) - Number(b[sortFields[0].field])));
    //             })
    // }, [])

    // setMovies(useDownloadMovies("http://localhost:4000/movies?limit=12"))
    // setTempMovies(movies);

    const sortFunction = (event: React.MouseEvent<Element, MouseEvent>) => {
        const element = event.target as HTMLSelectElement;
        const field = element.value as keyof Movie;
        if (field === "release_date") {
            setTempMovies([...tempMovies.sort((a: Movie, b: Movie) => new Date(a[field]).getTime() - new Date(b[field]).getTime())])
        } else
            setTempMovies([...tempMovies.sort((a: Movie, b: Movie) => Number(a[field]) - Number(b[field]))])
    }


    const genres: string[] = [
        "All",
        "Drama",
        "Romance",
        "Animation",
        "Adventure",
        "Family",
        "Comedy",
        "Fantasy",
        "Science Fiction",
        "Action"
    ]

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
        if (tempMovies.length === 0)
            return movies
        return tempMovies
    }
    store.subscribe(() =>
        setTempMovies(movies.filter(m =>
            m.title.toUpperCase().includes(store.getState().movie_to_find.toUpperCase())))
    )

    const filterMovies = (event: React.MouseEvent<Element, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (target.innerText !== "All") {
            movies = movies.filter(m => m.genres.includes(target.innerText))
            console.log(movies)
        }
        setTempMovies([...movies]);
    }

    return (
        <StoreContext.Provider value={store}>
            <div className={styles.wrapper}>
                {store.getState().isCardClicked ?
                    <MovieDetailsHeader onClick={() => store.dispatch({type: 'SWITCH_TO_FIND_CLICK'})}
                                        movie={store.getState().clicked_card}/> :
                    <FindHeader/>}

                <div className={styles.filter_sort_menu}>
                    <div className={styles.genres}>
                        <GenreList items={genres} onClick={(event) => filterMovies(event)}/>
                    </div>
                    <div className={styles.select_sort}>
                        <SelectSort sortFields={sortFields} sortFunction={sortFunction}/>
                    </div>
                </div>
                <div style={{alignSelf: "center"}}>{tempMovies.length} movies found</div>
                <div className={styles.cards}>
                    <MovieList movies={firstRender()}/>
                </div>
            </div>
        </StoreContext.Provider>
    );
}


export default App;
