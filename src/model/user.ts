import {Comment} from "./comment";

export interface User {
    _id: string,
    email: string,
    exp: number,
    iat: number,
    role: string,
}