import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";






const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'about', component: AboutPageComponent
  },
  {
    path: '**', redirectTo: ''
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
