import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiAventure, apiAventureById} from 'src/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class AventureService {

  constructor(private http: HttpClient) {}

  getAllAventures() {
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});*/
    return this.http.get( apiAventure + '/aventure/getAll',
      {
        headers: new HttpHeaders()
        /*.set('Access-Control-Allow-Origin', '*')*/
          .set('Content-Type', 'application/x-www-form-urlencoded')
        /* .set('Access-Control-Allow-Origin', '*')*/
        //.set('Authorization', 'Basic ' + btoa('test:test123'))
      })

  }

  getAventureById(id:number){
    return this.http.get(apiAventureById + '/aventure/' + id);
  }

}
