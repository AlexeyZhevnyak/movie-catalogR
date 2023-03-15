import {useState} from "react";
import {COUNTRIES, GENRES} from "../data";
import {SelectChangeEvent} from "@mui/material";
import {FilterSelect} from "../components/filterSelect/filterSelect";
import {useDispatch} from "react-redux";
import {Action} from "../redux/Action";

export const AsideFilterMenu = () => {
    const [genre, setGenre] = useState(GENRES[0]);
    const [country, setCountry] = useState(COUNTRIES[0]);
    const dispatchGenre = useDispatch();
    const dispatchCountry = useDispatch();
    const handleGenreChange = (event: SelectChangeEvent) => {
        setGenre(event.target.value);
        dispatchGenre({
            type: 'FILTER_BY_GENRE',
            payload: event.target.value
        });
    };

    const handleCountryChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
        dispatchCountry({
            type: 'FILTER_BY_COUNTRY',
            payload: event.target.value
        });
    };

    return (
        <div>
            <FilterSelect label={'Жанры'} handleChange={handleGenreChange}
                          items={GENRES} state={genre}/>
            <FilterSelect label={'Страны'} handleChange={handleCountryChange}
                          items={COUNTRIES} state={country}/>
        </div>
    )
}