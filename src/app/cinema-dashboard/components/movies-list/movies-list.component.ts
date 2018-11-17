import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
@Input() movies: Array<Object>
  constructor() { }

  ngOnInit() {
  }

}
