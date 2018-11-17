import { Component, Input } from "@angular/core";
import {  NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MovieDetailModalContentComponent } from "./movie-detail-modal-content/movie-detail-modal-content.component";

@Component({
  selector: "ngbd-modal-component",
  templateUrl: "./movie-details-modal.component.html"
})
export class MovieDetailModalComponent {
  @Input() details: Object;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MovieDetailModalContentComponent);
    modalRef.componentInstance.details = this.details;
  }

}
