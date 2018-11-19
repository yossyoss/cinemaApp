import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MoviesService } from "../../../../services/movies.service";
@Component({
  selector: "app-movie-delete-modal-content",
  templateUrl: "./movie-delete-modal-content.component.html",
  styleUrls: ["./movie-delete-modal-content.component.scss"]
})
export class MovieDeleteModalContentComponent implements OnInit {
  @Input() id: Number;
  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}
  delete(): void {
    this.moviesService.removeMovie(this.id);
    this.modalService.dismissAll();
  }
}
