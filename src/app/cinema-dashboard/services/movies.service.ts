import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  movies = [];
  movieArrayChange: Subject<Object[]> = new Subject<Object[]>();
  baseUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=3fdd5a3ac67cba27e25887ce1e75aea8&sort_by=popularity.desc&include_adult=true&include_video=false&page=1";

  genericImgUrl =
    "https://www.clipartmax.com/png/small/129-1291079_movie-reel-film-reel-clip-art-image-american-movies-shot-in-montreal.png";
  constructor(private http: HttpClient) {}
  getMovies(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }
  getMoviesDetailes(movieId): Observable<any> {
    return this.http.get(
      `http://www.omdbapi.com/?t=${movieId}&apikey=6c1869a6`
    );
  }
  removeMovie(id) {
    this.movies = this.movies.filter(movie => movie.id !== id);
    this.movieArrayChange.next(this.movies);
  }
  editMovie(movie) {
    let movieToEditIndex = this.movies.findIndex(m => m.id === movie.id);
    this.movies[movieToEditIndex] = {
      ...this.movies[movieToEditIndex],
      ...movie
    };
  }
  addMovie(movie) {
    movie.id = this.movies.length;
    movie.Poster = this.genericImgUrl;
    this.movies.push(movie);

    this.movieArrayChange.next(this.movies);
  }
  isTitleExist(title) {
    let exist = false;
    this.movies.forEach(movie => {
      if (movie.Title === title) exist = true;
    });
    return exist;
  }
  getData() {
    let movieTitles = [],
      counter = 0;
    this.getMovies().subscribe(({ results }: any) => {
      results.forEach(movie => {
        movieTitles.push(movie.title);
      });
      movieTitles.forEach(title => {
        this.getMoviesDetailes(title).subscribe(movieDetails => {
          if (!movieDetails.Error) {
            movieDetails.id = counter;
            if (!movieDetails.Poster) movieDetails.Poster = this.genericImgUrl;
            this.movies.push(movieDetails);
            counter++;
          }
        });
      });
    });
  }
}
