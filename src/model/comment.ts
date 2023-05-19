import {User} from "./user";

export interface Comment {
    _id: string,
    email: string,
    text: string,
    timestamp: string,
    likeCount: number,
    likedUsers: User[]
}