import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Provider} from 'react-redux'
import {Home} from "../../pages/home/Home";
import {MoviePage} from "../../pages/movie/MoviePage";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "../../redux/Reducer";
import {fetchMovies} from "../../redux/actionCreators";
import Navbar from "../navbar/Navbar";

function App() {
    const store = configureStore({
        reducer: reducer
    });
    store.dispatch(fetchMovies());

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<MoviePage/>}/>
                    {/*<Route path="/add" element={<Add/>}/>*/}
                    {/*<Route path="/edit" element={<Edit/>}/>*/}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}


export default App;
