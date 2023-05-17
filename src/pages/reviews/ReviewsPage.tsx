import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/Store";
import {fetchReviews} from "../../redux/actionCreators";
import {useSelector} from "react-redux/es/exports";
import {State} from "../../redux/State";
import {Review} from "../../components/review/Review";
import {useEffect} from "react";
import styles from './ReviewPage.module.scss';

export const ReviewsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const reviews = useSelector((state: State) => state.reviews);
    useEffect(() => {
        dispatch(fetchReviews());
    }, []);
    return <div className={styles.wrapper}>
        {reviews.map(r => <Review text={r.text} likes={r.likes} movieTitle={r.movieName} timestamp={r.timestamp}
                                  moviePoster={r.posterUrl} movieYear={r.movieYear}/>)}
    </div>
}