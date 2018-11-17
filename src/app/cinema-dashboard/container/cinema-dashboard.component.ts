import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "cinema-dashboard",
  templateUrl: "./cinema-dashboard.component.html",
  styleUrls: ["./cinema-dashboard.component.scss"]
})
export class CinemaDashboardComponent implements OnInit {
  movies = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    //http://www.omdbapi.com/?i=tt3896198&apikey=6c1869a6
    //https://api.themoviedb.org/3/discover/movie?api_key=3fdd5a3ac67cba27e25887ce1e75aea8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    this.getMovies();
  }
  getMovies() {
    let movieTitles = [];
    this.moviesService.getMovies().subscribe(({ results }: any) => {
      results.forEach(movie => {
        movieTitles.push(movie.title);
      });
      movieTitles.forEach(title => {
        this.moviesService.getMoviesDetailes(title).subscribe(movieDetails => {
          this.movies.push(movieDetails);
          console.log(movieDetails);
        });
      });
    });
    // this.http
    //   .get(
    //     "https://api.themoviedb.org/3/discover/movie?api_key=3fdd5a3ac67cba27e25887ce1e75aea8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    //   )
    //   .subscribe(
    //     ({ results }) => {
    //       console.log(results);
    //       results.forEach(element => {
    //         this.http
    //           .get(`http://www.omdbapi.com/?t=${element.title}&apikey=6c1869a6`)
    //           .subscribe(
    //             res => {
    //               console.log(res);
    //             },
    //             err => {
    //               console.log(err);
    //             }
    //           );
    //       });
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );
  }
}
