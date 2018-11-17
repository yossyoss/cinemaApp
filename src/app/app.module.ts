import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CinemaDashboardModule } from "./cinema-dashboard/cinema-dashboard.module";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CinemaDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
