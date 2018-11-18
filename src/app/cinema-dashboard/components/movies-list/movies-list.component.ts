import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
@Component({
  selector: "movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit {
  movies: Array<Object>;
  constructor(private moviesService: MoviesService) {
    moviesService.movieArrayChange.subscribe(value => {
      this.movies = value;
    });
  }

  ngOnInit() {
    this.movies = this.moviesService.movies;
  }
}
