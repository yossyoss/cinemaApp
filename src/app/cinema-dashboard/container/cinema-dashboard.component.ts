import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "cinema-dashboard",
  templateUrl: "./cinema-dashboard.component.html",
  styleUrls: ["./cinema-dashboard.component.scss"]
})
export class CinemaDashboardComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getData();
  }
}
