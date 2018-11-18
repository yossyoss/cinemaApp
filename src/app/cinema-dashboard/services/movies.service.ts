import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from "rxjs/operators";
// import { Subject } from 'rxjs/Subject';
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  movies: Array<Object> = [];
  movieArrayChange: Subject<Object[]> = new Subject<Object[]>();
  baseUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=3fdd5a3ac67cba27e25887ce1e75aea8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  // omdbapiUrl =
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
    console.log(movie);
    this.movies[movie.id] = { ...this.movies[movie.id], ...movie };
  }
  addMovie(movie) {
    movie.id = this.movies.length;
    movie.Poster =
      "https://www.clipartmax.com/png/small/129-1291079_movie-reel-film-reel-clip-art-image-american-movies-shot-in-montreal.png";
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
          movieDetails.id = counter;
          this.movies.push(movieDetails);
          counter++;
        });
      });
    });
  }
}
