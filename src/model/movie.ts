export class Movie {
  public id: number = 0;
  public title: string = ""
  public tagline: string = "";
  public vote_average: number = 0
  public vote_count: number = 0;
  public release_date: string;
  public poster_path: string = "";
  public overview: string;
  public budget: number = 0;
  public revenue: number = 0;
  public genres: string[] = []
  public runtime: number = 0;


  constructor(id: number, title: string, tagline: string, vote_average: number, vote_count: number, release_date: string, poster_path: string, overview: string, budget: number, revenue: number, genres: string[], runtme: number) {
    this.id = id;
    this.title = title;
    this.tagline = tagline;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.release_date = release_date
    this.poster_path = poster_path;
    this.overview = overview;
    this.budget = budget;
    this.revenue = revenue;
    this.genres = genres;
    this.runtime = runtme;
  }

}
