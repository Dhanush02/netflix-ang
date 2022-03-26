import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movieId: any;
  public id: any;
  constructor(private http: HttpClient) {}

  public api_key: string = '0fc36919fff2603ac5d92fb95863f537';

  PopularData = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/tv?api_key=${this.api_key}`
    );
  };
  PopularMovie = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}`
    );
  };
  DiscoverMovie = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=99`
    );
  };
  trendingAllData = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.api_key}`
    );
  };

  comedyMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=35`
    );
  };
  HorrorMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=27`
    );
  };

  RomanticMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=10749`
    );
  };
  ActionMovies = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=28`
    );
  };

  movie = (e: any) => {
    this.movieId = e;
    console.log(this.movieId);
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.api_key}`
    );
  };


  TopRated = () => {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${this.api_key}`
    );
  };
}
