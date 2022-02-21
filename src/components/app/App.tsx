import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import MovieCard from "../movie-card/MovieCard";
import {SelectOption} from "../../model/selectOption";
import {Movie} from "../../model/movie";
import {createStore} from "redux";
import {reducer} from "../../redux/reducer";
import {initialState} from "../../redux/MyState";
import {FindHeader} from "../find-header/FindHeader";
import {MovieDetailsHeader} from "../movieDetailsHeader/MovieDetailsHeader";

const store = createStore(reducer as any, initialState,)
export const StoreContext = React.createContext(store);

function App() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [tempMovies, setTempMovies] = useState<Movie[]>([]);
    useEffect(() => {
        fetch("http://localhost:4000/movies?limit=12")
            .then(res => res.json())
            .then(
                (result) => {
                    setMovies(result.data);
                    setTempMovies(result.data);
                })
    }, [])


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

    store.subscribe(() =>
        setTempMovies(movies.filter(m =>
            m.title.toUpperCase().includes(store.getState().movie_to_find.toUpperCase())))
    )


    return (
        <StoreContext.Provider value={store}>
            <div className={styles.wrapper}>
                {store.getState().isCardClicked ? <MovieDetailsHeader movie={store.getState().clicked_card}/> : <FindHeader/>}

                <div className={styles.filter_sort_menu}>
                    <div className={styles.genres}>
                        {
                            genres.map(g => <div key={g} onClick={
                                () => {
                                    if (g === "All") {
                                        setTempMovies(movies)
                                    } else
                                        setTempMovies(movies.filter(m => m.genres.includes(g)))
                                }
                            }
                            >{g}</div>)}
                    </div>
                    <div className={styles.select_sort}>
                        <span className={styles.sort_text}>SORT BY</span>
                        <select>
                            {sortFields.map(sf => <option key={sf.title}>{sf.title}</option>)}
                        </select>
                    </div>
                </div>
                <div style={{alignSelf: "center"}}>{tempMovies.length} movies found</div>
                <div className={styles.cards}>
                    {tempMovies.map(m => <MovieCard movie={m} onClick={() => store.dispatch({
                        type: 'CARD_CLICK',
                        payload: m
                    })} key={m.id}/>)}
                </div>
            </div>
        </StoreContext.Provider>
    );
}


export default App;
