import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  baseUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=3fdd5a3ac67cba27e25887ce1e75aea8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  // omdbapiUrl =
  constructor(private http: HttpClient) {}
  getMovies(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getMoviesDetailes(movieId): Observable<any> {
    return this.http.get(
      `http://www.omdbapi.com/?t=${movieId}&apikey=6c1869a6`
    );
  }
}
