import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import React, {ReactNode} from "react";

export const FilterSelect = (props: {
    label: string;
    handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
    items: string[],
    state: string
}) => {
    const style = {
        background: '#555555',
        color: '#f65261',
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{color: style.color}}></InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.label}
                MenuProps={{MenuListProps: {sx: style}}}
                sx={style}
                onChange={props.handleChange}
                value={props.state}>
                {
                    props.items.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}