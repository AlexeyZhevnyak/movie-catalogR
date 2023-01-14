import {Movie} from "./movie";

export interface SelectOption {
    title: string;
    field: keyof Movie;
}

