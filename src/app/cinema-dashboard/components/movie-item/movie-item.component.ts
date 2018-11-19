import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Object;
  constructor() {}

  ngOnInit() {}
}
