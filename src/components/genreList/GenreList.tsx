import React, {MouseEventHandler} from "react";

export function GenreList(props: {
    items: string[],
    onClick: MouseEventHandler,
    className : string
}) {
    return (
        <div className={props.className}>
            {props.items.map(g => <div key={g} onClick={props.onClick}>{g}</div>)}
        </div>
    )
}
