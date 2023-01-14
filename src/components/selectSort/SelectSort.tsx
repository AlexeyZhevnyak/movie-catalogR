import styles from "../app/App.module.css";
import React from "react";
import {SelectOption} from "../../model/selectOption";

export function SelectSort(props: {
    sortFields: SelectOption[],
    sortFunction: (event: React.MouseEvent<Element, MouseEvent>) => void,
    className: string
}) {
    return (
        <div className={props.className}>
            <span className={styles.sort_text}>SORT BY</span>
            <select onClick={props.sortFunction}>
                {props.sortFields.map(sf => <option value={sf.field}
                                                    key={sf.title}>{sf.title}</option>)}
            </select>
        </div>
    )
}
