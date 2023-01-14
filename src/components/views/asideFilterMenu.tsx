import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"

export const AsideFilterMenu = () => {
    const style = {
        background: '#555555',
        color: '#f65261',
    };
    return (<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color: '#f65261'}}>Lable</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            MenuProps={{
                MenuListProps: {
                    sx: {
                        background: '#555555',
                        color: '#f65261'
                    }
                }
            }}
            sx={style}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>);
}