import {KeyboardEventHandler} from "react";

export function FindHeader(props: {
    onKeyUpHandle: KeyboardEventHandler
}) {
    return (
        <div>
            <input type={"text"} onKeyUp={props.onKeyUpHandle}/>
        </div>
    )
}
