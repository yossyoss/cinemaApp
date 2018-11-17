import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-movie-delete-modal-content",
  templateUrl: "./movie-delete-modal-content.component.html",
  styleUrls: ["./movie-delete-modal-content.component.scss"]
})
export class MovieDeleteModalContentComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}
  delete() {
    this.modalService.dismissAll();
  }
}
