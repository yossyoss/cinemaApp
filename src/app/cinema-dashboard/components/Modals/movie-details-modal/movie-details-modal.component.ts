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
    console.log(this.details.id);

    const modalRef = this.modalService.open(MovieDeleteModalContentComponent);
    if (this.details && (this.details.id || this.details.id === 0)) {
      modalRef.componentInstance.id = this.details.id;
    }
  }
}
