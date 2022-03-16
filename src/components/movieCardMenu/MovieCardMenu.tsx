import styles from "./MovieCardMenu.module.scss"
import {useNavigate} from "react-router";
import {Movie} from "../../model/movie";
import {useContext} from "react";
import {StoreContext} from "../app/App";

export function MovieCardMenu(props: {
    className: string,
    movie: Movie
}) {
    const navigate = useNavigate();
    const store = useContext(StoreContext);

    return (
        <div className={props.className}>
            <div className={styles.header}>
                <div className={styles.headerBurger}>
                    <span></span>
                </div>
            </div>
            <nav className={styles.headerMenu}>
                <ul className="header-list">
                    <li onClick={() => {
                        store.dispatch({
                            type : 'EDIT_MOVIE_CLICK',
                            payload : props.movie
                        })
                        navigate('/edit');
                    }}>
                        <span className="header-elem" >Edit</span>
                    </li>
                    <li>
                        <span className="header-elemD">Delete</span>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
