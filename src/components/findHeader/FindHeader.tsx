import {useDispatch} from "react-redux";

export function FindHeader() {
    const dispatch = useDispatch();
    return (
        <div>
            <input type={"text"} onKeyUp={(event) => {
                const e = event.target as HTMLInputElement;
                dispatch({
                    type: 'MOVIE_FIND_KEYDOWN',
                    payload : e.value
                })
            }}/>
        </div>
    )
}
