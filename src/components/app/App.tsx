import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import {Movies} from "../../pages/movies/Movies";
import {Home} from "../../pages/home/Home";
import {MoviePage} from "../../pages/movie/MoviePage";
import CreateReviewPage from "../../pages/createReview/CreateReviewPage";
import {useSelector} from "react-redux/es/exports";
import {State} from "../../redux/State";

function App() {
    const currentMovie = useSelector((state: State) => state.currentMovie);
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<MoviePage/>}/>

                {currentMovie.name &&
                    <Route path="/movies/:id/createPost" element={<CreateReviewPage movieTitle={currentMovie.name}
                                                                                    moviePosterUrl={currentMovie.poster.previewUrl}
                                                                                    movieYear={currentMovie.year}
                                                                                    movieId={currentMovie.id.toString()}/>}/>}
                {/*<Route path="/movies/*" element={<Navigate to="/" replace={true} />} caseSensitive={false} />*/}
            </Routes>
        </BrowserRouter>
    );
}


export default App;
