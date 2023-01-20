import {useState} from "react";
import {genres} from "../data";
import {SelectChangeEvent} from "@mui/material";
import {FilterSelect} from "../components/filterSelect/filterSelect";

export const AsideFilterMenu = () => {
  const [genre, setGenre] = useState(genres[0]);
  const handleGenreChange = (event: SelectChangeEvent) => setGenre(event.target.value);
  return (
      <div>
        <FilterSelect label={'Жанры'} handleChange={handleGenreChange}
                      items={genres} state={genre}/>
      </div>
  )
}