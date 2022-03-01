import React, {MouseEventHandler} from "react";

export function GenreList(props: {
    items: string[],
    onClick: MouseEventHandler
}) {
    return (
        <>
            {props.items.map(g => <div key={g} onClick={props.onClick}>{g}</div>)}
        </>
    )
}
