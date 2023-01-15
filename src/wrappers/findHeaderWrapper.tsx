import React from "react";
import {useDispatch} from "react-redux";
import {FindHeader} from "../components/findHeader/FindHeader";

export function FindHeaderWrapper() {
    const dispatch = useDispatch();
    const onKeyUpHandle = (event: React.KeyboardEvent) => {
        const e = event.target as HTMLInputElement;
        dispatch({
            type: 'MOVIE_FIND_KEYDOWN',
            payload: e.value
        });
    }
    return <FindHeader onKeyUpHandle = {onKeyUpHandle}></FindHeader>
}