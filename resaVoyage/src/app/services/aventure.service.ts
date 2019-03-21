import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiAventure, apiAventureById, apiSessionById, apiAventureBySession} from 'src/shared/constant';
import { Observable } from 'rxjs';
import { Session } from 'src/shared/models/session';

@Injectable({
  providedIn: 'root'
})
export class AventureService {

  constructor(private http: HttpClient) {}

  getAllAventures() {
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});*/
    return this.http.get( apiAventure + '/aventure/getAll')

  }

  getAventureById(id:number){
    return this.http.get(apiAventureById + '/aventure/' + id);
  }
  getAventureBySession(id: number) {
    return this.http.get(apiAventureBySession + '/getBySession/' + id);

  }
  getSessionById(id: number): Observable<Session> {
    return this.http.get<Session>(apiSessionById + '/session/' + id);

  }
}
