import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/Store";
import {fetchReviews} from "../../redux/actionCreators";
import {useSelector} from "react-redux/es/exports";
import {State} from "../../redux/State";

export const ReviewsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const reviews = useSelector((state: State) => state.reviews);
    dispatch(fetchReviews);
    return <div>

    </div>
}