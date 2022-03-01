export interface AddMovieDTO {
  title: string,
  genres: string[],
  runtime: number,
  overview: string,
  poster_path: string,
  release_date: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  budget: number,
  revenue: number
}
