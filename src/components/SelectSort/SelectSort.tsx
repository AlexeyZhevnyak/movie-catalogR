import styles from "../app/App.module.css";
import React, {ReactElement} from "react";
import {SelectOption} from "../../model/selectOption";

export function SelectSort(props: {
    sortFields: SelectOption[],
    sortFunction: (event: React.MouseEvent<Element, MouseEvent>) => void
}) {
    return (
        <>
            <span className={styles.sort_text}>SORT BY</span>
            <select onClick={(event) => props.sortFunction(event)}>
                {props.sortFields.map(sf => <option value={sf.field}
                                                    key={sf.title}>{sf.title}</option>)}
            </select>
        </>
    )
}
