import { Component, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MovieDetailModalContentComponent } from "./movie-detail-modal-content/movie-detail-modal-content.component";
import { MovieDeleteModalContentComponent } from "./movie-delete-modal-content/movie-delete-modal-content.component";

@Component({
  selector: "ngbd-modal-component",
  templateUrl: "./movie-details-modal.component.html"
})
export class MovieDetailModalComponent {
  @Input() details;
  @Input() new: Boolean;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MovieDetailModalContentComponent);
    modalRef.componentInstance.details = this.details;
  }
  add() {
    const modalRef = this.modalService.open(MovieDetailModalContentComponent);
    modalRef.componentInstance.isNew = true;
  }
  delete(): void {
    const modalRef = this.modalService.open(MovieDeleteModalContentComponent);
    if (this.details && this.details.id) {
      modalRef.componentInstance.id = this.details.id;
    }
  }
}
