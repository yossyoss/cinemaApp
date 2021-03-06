import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MoviesService } from "./services/movies.service";
import { CinemaDashboardComponent } from "./container/cinema-dashboard.component";
import { MovieItemComponent } from "./components/movie-item/movie-item.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MovieDetailModalComponent } from "./components/Modals/movie-details-modal/movie-details-modal.component";
import { MovieDetailModalContentComponent } from "./components/Modals/movie-details-modal/movie-detail-modal-content/movie-detail-modal-content.component";
import { MovieDeleteModalContentComponent } from "./components/Modals/movie-details-modal/movie-delete-modal-content/movie-delete-modal-content.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

import { SpecialCharPipePipe } from "./components/pipe/specialCharPipe.pipe";
@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [
    MovieDeleteModalContentComponent,
    MovieDetailModalContentComponent,
    MovieDetailModalComponent,
    CinemaDashboardComponent,
    MovieItemComponent,
    MoviesListComponent,
    NavBarComponent,
    SpecialCharPipePipe
  ],
  entryComponents: [
    MovieDetailModalContentComponent,
    MovieDeleteModalContentComponent
  ],
  providers: [MoviesService],
  exports: [CinemaDashboardComponent]
})
export class CinemaDashboardModule {}
