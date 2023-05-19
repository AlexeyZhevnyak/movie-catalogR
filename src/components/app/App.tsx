import React, {useEffect} from "react";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import {Movies} from "../../pages/movies/Movies";
import {Home} from "../../pages/home/Home";
import {MoviePage} from "../../pages/movie/MoviePage";
import CreateReviewPage from "../../pages/createReview/CreateReviewPage";
import {useSelector} from "react-redux/es/exports";
import {State} from "../../redux/State";
import {ReviewsPage} from "../../pages/reviews/ReviewsPage";
import LoginPage from "../../pages/login/LoginPage";
import {check} from "../../hooks/hooks";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/Store";
import {setUser} from "../../redux/Reducer";
import {User} from "../../model/user";

function App() {
    const currentMovie = useSelector((state: State) => state.currentMovie);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        check()
            .then((data: any) => {
                dispatch(setUser(data))
            })
            .catch(e => {
                setUser({} as User);
            })
    })
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<MoviePage/>}/>

                {currentMovie.name &&
                    <Route path="/movies/:id/createPost" element={<CreateReviewPage movieTitle={currentMovie.name}
                                                                                    moviePosterUrl={currentMovie.poster.url}
                                                                                    movieYear={currentMovie.year}
                                                                                    movieId={currentMovie.id.toString()}/>}/>}
                <Route path={'/reviews'} element={<ReviewsPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/registration'} element={<LoginPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
