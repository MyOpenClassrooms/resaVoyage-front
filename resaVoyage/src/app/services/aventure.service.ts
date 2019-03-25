import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  apiAventure,
  apiAventureById,
  apiSessionById,
  apiAventureBySession,
  apiCommentaire,
  apiAventureByCategory
} from 'src/shared/constant';
import { Observable } from 'rxjs';
import { Session } from 'src/shared/models/session';
import {Commande} from "../../shared/models/commande";
import {Aventure} from "../../shared/models/aventure";
import {Category} from "../../shared/models/category";

@Injectable({
  providedIn: 'root'
})
export class AventureService {

  constructor(private http: HttpClient) {}

  getAllAventures(): Observable<Aventure[]> {
    return this.http.get<Aventure[]>( apiAventure + '/aventure/getAll');
  }

  getAventureById(id:number):Observable<Aventure>{
    return this.http.get<Aventure>(apiAventureById + '/aventure/' + id);
  }
  getAventureBySession(id: number) {
    return this.http.get(apiAventureBySession + '/getBySession/' + id);
  }

  getAventuresByCategory(id : number) : Observable<Aventure[]>{
    return this.http.get<Aventure[]>(apiAventureByCategory + '/categoryId/' + id);
  }

  getSessionById(id: number): Observable<Session> {
    return this.http.get<Session>(apiSessionById + '/session/' + id);

  }
}
