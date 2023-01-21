import {KeyboardEventHandler} from "react";

export function FindHeader(props: {
    onKeyUpHandle: KeyboardEventHandler
}) {
    return <input type={"text"} onKeyUp={props.onKeyUpHandle}/>
}
