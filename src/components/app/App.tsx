import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import reducer from "../../redux/Reducer";
import {fetchMovies} from "../../redux/actionCreators";
import Navbar from "../navbar/Navbar";
import {Movies} from "../../pages/movies/Movies";
import {Home} from "../../pages/home/Home";
import {MoviePage} from "../../pages/movie/MoviePage";

function App() {
    const store = configureStore({
        reducer: reducer
    });
    store.dispatch(fetchMovies());

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path='/movies/:id' element={<MoviePage/>}/>
                    <Route path='/movies/:id/createPost' element={<MoviePage/>}/>
                    {/*<Route path="/movies/*" element={<Navigate to="/" replace={true} />} caseSensitive={false} />*/}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}


export default App;
