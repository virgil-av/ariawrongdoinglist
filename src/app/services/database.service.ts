import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {dbSettings} from './api.configuration';
import * as uniqid from 'uniqid';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }


  getWrongdoingList(){
    return this.http.get(dbSettings.dbUrl + dbSettings.dbKillList)
      .map(response => response.json());
  }

  createNewWrongdoing(body: any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(dbSettings.dbUrl + dbSettings.dbKillList,JSON.stringify(body),{headers:headers})
      .map(response => response.json());
  }

  updateWrongdoing(body: any, personId: string){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.patch(dbSettings.dbUrl + dbSettings.dbKillList + '/' + personId,JSON.stringify(body),{headers:headers})
      .map(response => response.json());
  }

  eraseAllData(){
    return this.http.delete(dbSettings.dbUrl + dbSettings.dbKillList)
      .map(response => response.json());
  }


  generateUniqueId(){
    // this function generates an unique id based on npm uniqip + Math.random
    // this ensures an unique id even if multiple user perform an action at the exact same time
    return uniqid() + 'ARYA' + (Math.floor((Math.random() * 10000000) + 1)).toString(16);
  }

}
