import { Component, OnInit, Input, onChanges } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MovieDeleteModalContentComponent } from "../movie-delete-modal-content/movie-delete-modal-content.component";
import { MoviesService } from "../../../../services/movies.service";
@Component({
  selector: "app-movie-detail-modal-content",
  templateUrl: "./movie-detail-modal-content.component.html",
  styleUrls: ["./movie-detail-modal-content.component.scss"]
})
export class MovieDetailModalContentComponent implements OnInit {
  @Input() details: Object;
  @Input() isNew: Boolean;
  isExist: Boolean = false;
  detailForm: FormGroup;
  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    if (this.details) {
      this.detailForm = new FormGroup({
        id: new FormControl(
          { value: this.details.id, disabled: true },
          Validators.required
        ),
        Title: new FormControl(this.details.Title, Validators.required),
        Year: new FormControl(this.details.Year, Validators.required),
        Runtime: new FormControl(this.details.Runtime, Validators.required),
        Genre: new FormControl(this.details.Genre, Validators.required),
        Director: new FormControl(this.details.Director, Validators.required)
      });
    } else {
      this.detailForm = new FormGroup({
        Year: new FormControl("", Validators.required),
        Title: new FormControl("", Validators.required),
        Runtime: new FormControl("", Validators.required),
        Genre: new FormControl("", Validators.required),
        Director: new FormControl("", Validators.required)
      });
    }
    this.onChanges();
  }
  onChanges(): void {
    this.detailForm.get("Title").valueChanges.subscribe(val => {
      if (this.moviesService.isTitleExist(val)) {
        this.isExist = true;
      } else {
        this.isExist = false;
      }
    });
  }
  save() {
    console.log(this.detailForm.value);
    if (this.detailForm.status === "VALID" && !this.isExist) {
      const id = this.detailForm.get("id")
        ? this.detailForm.get("id").value
        : null;
      const movie = this.detailForm.value;
      if (id) {
        movie.id = id;
        this.moviesService.editMovie(movie);
      } else {
        this.moviesService.addMovie(movie);
      }
      this.modalService.dismissAll();
    }
  }
  delete() {
    const modalRef = this.modalService.open(MovieDeleteModalContentComponent);
    modalRef.componentInstance.id = this.detailForm.get("id").value;
  }
  closePanel(event) {
    event.stopPropagation();
    event.preventDefault();
    this.modalService.dismissAll();
  }
}
