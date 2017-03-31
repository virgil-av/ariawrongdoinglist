import {Component} from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  constructor(private db: DatabaseService, private router: Router) {
  }

  navigateTo() {
    this.router.navigate(['/']);
  }
  deleteAllData(){
    this.db.eraseAllData()
      .subscribe(response =>{
        alert(response.status);
      })
  }


}
