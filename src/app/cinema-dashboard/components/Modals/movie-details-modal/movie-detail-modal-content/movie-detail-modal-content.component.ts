import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MovieDeleteModalContentComponent } from "../movie-delete-modal-content/movie-delete-modal-content.component";
@Component({
  selector: "app-movie-detail-modal-content",
  templateUrl: "./movie-detail-modal-content.component.html",
  styleUrls: ["./movie-detail-modal-content.component.scss"]
})
export class MovieDetailModalContentComponent implements OnInit {
  @Input() details;

  detailForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    if (this.details) {
      this.detailForm = new FormGroup({
        id: new FormControl(
          { value: this.details.imdbID, disabled: true },
          Validators.required
        ),
        title: new FormControl(this.details.Title, Validators.required),
        year: new FormControl(this.details.Year, Validators.required),
        runtime: new FormControl(this.details.Runtime, Validators.required),
        genre: new FormControl(this.details.Genre, Validators.required),
        director: new FormControl(this.details.Director, Validators.required)
      });
    } else {
      this.detailForm = new FormGroup({
        id: new FormControl({ value: "", disabled: true }, Validators.required),
        title: new FormControl("", Validators.required),
        year: new FormControl("", Validators.required),
        runtime: new FormControl("", Validators.required),
        genre: new FormControl("", Validators.required),
        director: new FormControl("", Validators.required)
      });
    }
  }
  save() {
    console.log(this.detailForm.value);
    if (this.detailForm.status === "VALID") this.modalService.dismissAll();
  }
  delete() {
    this.modalService.open(MovieDeleteModalContentComponent, {
      size: "lg"
    });
  }
}
