import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableSortingPipe } from './pipes/table-sorting.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddWrongdoingComponent } from './components/dashboard/add-wrongdoing/add-wrongdoing.component';
import {DatabaseService} from "./services/database.service";
import { LoadingSpinnerComponent } from './utils/loading-spinner/loading-spinner.component';
import { EditWrongdoingComponent } from './components/dashboard/edit-wrongdoing/edit-wrongdoing.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AboutPageComponent } from './components/about-page/about-page.component';
import {AppRouting} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    TableSortingPipe,
    DashboardComponent,
    HeaderComponent,
    AddWrongdoingComponent,
    LoadingSpinnerComponent,
    EditWrongdoingComponent,
    FilterPipe,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
