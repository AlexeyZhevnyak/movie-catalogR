export interface Review {
    movieName: string,
    movieId: string
    text: string,
    userId: string,
    timestamp: string,
    rating: number,
    tags: string[],
    // comments: Comment[],
    likes: number,
    posterUrl: string,
    movieYear: string
}