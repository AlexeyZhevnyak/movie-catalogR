import {useState} from "react";
import {genres} from "../data";
import {SelectChangeEvent} from "@mui/material";
import {FilterSelect} from "../components/filterSelect/filterSelect";
import {useDispatch} from "react-redux";
import {Action} from "../redux/Action";

export const AsideFilterMenu = () => {
    const [genre, setGenre] = useState(genres[0]);
    const dispatchGenre = useDispatch();
    const handleGenreChange = (event: SelectChangeEvent) => {
        setGenre(event.target.value);
        dispatchGenre({
            type: 'FILTER_BY_GENRE',
            payload: event.target.value
        });
    };
    return (
        <div>
            <FilterSelect label={'Жанры'} handleChange={handleGenreChange}
                          items={genres} state={genre}/>
        </div>
    )
}