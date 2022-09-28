export class Movie {
  public Id!: number;
  public Title!: string;
  public Overview!: string;
  public Popularity!: number;
  public ImagePath!: string;

  public Movie(
    id: number,
    title: string,
    overview: string,
    popularity: number,
    imagePath: string,
  ) {
    this.Id = id;
    this.Title = title;
    this.Overview = overview;
    this.Popularity = popularity;
    this.ImagePath = imagePath;
  }
}
