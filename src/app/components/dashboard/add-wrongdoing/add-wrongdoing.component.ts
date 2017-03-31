import {Component, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {DatabaseService} from "../../../services/database.service";

declare let $:any;



@Component({
  selector: 'app-add-wrongdoing',
  templateUrl: './add-wrongdoing.component.html',
  styleUrls: ['./add-wrongdoing.component.css']
})
export class AddWrongdoingComponent {

  formAddWrongdoing: FormGroup;
  isLoading: boolean = false;
  anyError: Error;
  @Output() updateWrongdoingList: EventEmitter<any> = new EventEmitter();


  constructor(private formBuilder: FormBuilder,
              private db: DatabaseService,
  ) {

    this.formAddWrongdoing = formBuilder.group({
      "personName": ['',[Validators.required]],
      "reason": ['',[Validators.required]],
      "status": ['alive'],
      "id": this.db.generateUniqueId()
    });
  }

  addNewWrongdoing(){
    this.isLoading = true;
    this.db.createNewWrongdoing(this.formAddWrongdoing.value)
      .subscribe(response => {
        // stop loading
          this.isLoading = false;
        // close modal
          $('#addWrongdoing').modal('hide');
        //reset form
        this.formReset();
        //update wrongdoing list
        this.updateWrongdoingList.emit(response);
        //test console
        console.log(response);
      },
        error => this.anyError = error
      )
  }

  formReset(){
    //reset form
    this.formAddWrongdoing.reset({
      "personName": "",
      "reason": "",
      "status": "alive",
      "id": this.db.generateUniqueId()
    });
  }



}
