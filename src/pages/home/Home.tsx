import {useDispatch} from "react-redux";
import {fetchActualMovies} from "../../redux/actionCreators";
import React, {useEffect} from "react";
import {AppDispatch} from "../../redux/Store";
import {useSelector} from "react-redux/es/exports";
import {State} from "../../redux/State";
import MovieCardHome from "../../components/movieCardHome/MovieCardHome";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const actualMovies = useSelector((state: State) => state.actualMovies);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchActualMovies())
    }, [dispatch])
    return <div>
        {actualMovies.map(m => <MovieCardHome movie={m} onClick={() => {
            navigate(`/movies/${m.id}`);
        }} key={m.id}/>)}
    </div>
}