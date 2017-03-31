import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import * as _ from 'lodash';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wrongdoingList: any[] = [];
  anyError: Error;
  selectedPersonStatus: string;
  selectedPersonId: string;
  filterQuery: string = 'alive';
  debtCount: number = 0;
  isLoading: boolean = false;
  isWrongdoingListEmpty: boolean;

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    // show spinner when loading from api
    this.isLoading = true;
    this.db.getWrongdoingList()
      .subscribe(list => {
          //assign api list to local variable
          this.wrongdoingList = list;
          //hide spinner
          this.isLoading = false;
          //check to see if list is empty
          this.checkIfEmpty(list);

        }, error => this.anyError = error
      )
  }

  checkIfEmpty(list: any) {
    //check to see if wrongdoing list is empty
    this.isWrongdoingListEmpty = _.isEmpty(list);
  }

  updateList(newPerson: any) {
    //updates the list after new person was added
    // this function is triggered by the event emitter in add-wrongdoing
    this.wrongdoingList.push(newPerson);
    this.checkIfEmpty(this.wrongdoingList);
  }

  updateSelectedPerson(selectedPerson: any) {
    // find the person using lodash
    let person = _.find(this.wrongdoingList, {
      "id": selectedPerson.id
    });
    // merge the selected person,using lodash, with the response from api
    _.merge(person, selectedPerson);
  }

  selectPerson(selectedStatus: string, selectedId) {
    // sets value for child component edit wrongdoing
    // selects the status between Dead and Dead by Jagen.
    this.selectedPersonStatus = selectedStatus;
    this.selectedPersonId = selectedId;
    // opens edit modal
    $('#editWrongdoing').modal();
  }

  checkJagen() {
    // this will check if Jagen has maximum of 3 contracts.
    let contract: any[] = _.filter(this.wrongdoingList, {
      "status": 'dead by Jagen'
    });
    //count debt
    this.debtCount = contract.length;

    if (contract.length >= 3) {
      return false;
    } else {
      return true;
    }
  }



}
