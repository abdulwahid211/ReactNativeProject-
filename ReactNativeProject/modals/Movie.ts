class Movie {
  public Id!: number;
  public Title!: string;
  public Overview!: string;
  public Popularity!: number;

  public Movie(
    id: number,
    title: string,
    overview: string,
    popularity: number,
  ) {
    this.Id = id;
    this.Title = title;
    this.Overview = overview;
    this.Popularity = popularity;
  }
}
