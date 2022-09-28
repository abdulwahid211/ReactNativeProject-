import axios from 'axios';
export const API_KEY = '9b75d5e316dbf6cb0dae80e04e4454b3';
import {Movie} from '../modals/Movie';

const url: string =
  'https://api.themoviedb.org/3/movie/popular?api_key=' +
  API_KEY +
  '&language=en-US&page=1';

export async function GetListMovies() {
  const response = await axios.get(url).catch(function (error) {
    // handle error
    console.log(error);
  });
  const results = [];

  for (const item in response.data.results) {
    const movieObject: Movie = {
      Id: response.data.results[item].id,
      Title: response.data.results[item].title,
      Overview: response.data.results[item].overview,
      Popularity: response.data.results[item].popularity,
      ImagePath: response.data.results[item].poster_path,
    };
    results.push(movieObject);
  }

  return results;
}