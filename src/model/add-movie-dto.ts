export interface AddMovieDTO {
  title: string,
  genres: string[],
  runtime: number,
  overview: string,
  poster_path: string,
  release_date: string,
  tagline: string,
  vote_average: Number,
  vote_count: Number,
  budget: Number,
  revenue: Number
}
