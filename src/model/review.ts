import {Comment} from "./comment";

export interface Review{
    movieName: string,
    text: string,
    userId: string,
    timestamp: string,
    rating: number,
    tags: string[],
    comments: Comment[]
}