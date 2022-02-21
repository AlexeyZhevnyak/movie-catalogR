import React, {useContext} from "react";
import {StoreContext} from "../app/App";

export function FindHeader(props: any) {
    const store = useContext(StoreContext);
    return (
        <div>
            <input type={"text"} onKeyUp={(event) => {
                const e = event.target as HTMLInputElement;
                store.dispatch({
                    type: 'MOVIE_FIND_KEYDOWN',
                    payload : e.value
                })
            }}/>
        </div>
    )
}
