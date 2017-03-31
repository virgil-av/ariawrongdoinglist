import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {DatabaseService} from "../../../services/database.service";

declare let $:any;

@Component({
  selector: 'app-edit-wrongdoing',
  templateUrl: './edit-wrongdoing.component.html',
  styleUrls: ['./edit-wrongdoing.component.css']
})
export class EditWrongdoingComponent implements OnChanges {

  formEditWrongdoing: FormGroup;
  isLoading: boolean = false;
  anyError: Error;
  @Input() personStatus: string = 'dead';
  @Input() personId: string;
  @Output() updateSelectedPerson: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private db: DatabaseService,
  ) {}

  ngOnChanges(){
    this.formEditWrongdoing = this.formBuilder.group({
      "status": this.personStatus,
      "fate": ['', [Validators.required]]
    });
  }


  editWrongdoing(){
    this.isLoading = true;
    this.db.updateWrongdoing(this.formEditWrongdoing.value, this.personId)
      .subscribe(response => {
          // stop loading
          this.isLoading = false;
          // close modal
          $('#editWrongdoing').modal('hide');
          //reset form
          this.formReset();
          //update wrongdoing list
          this.updateSelectedPerson.emit(response);
          //test console
          console.log(response);
        },
        error => this.anyError = error
      )
  }


  formReset(){
    this.formEditWrongdoing.reset();
  }


}
