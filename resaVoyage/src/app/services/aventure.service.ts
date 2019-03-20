import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiAventure, apiAventureById, apiCommande} from 'src/shared/constant';
import {Observable} from "rxjs";
import {Commande} from "../../shared/models/commande";
import {Aventure} from "../../shared/models/aventure";

@Injectable({
  providedIn: 'root'
})
export class AventureService {

  constructor(private http: HttpClient) {}

  getAllAventures(): Observable<Aventure[]> {
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});*/
    return this.http.get<Aventure[]>( apiAventure + '/aventure/getAll');
  }

  getAventureById(id:number):Observable<Aventure>{
    return this.http.get<Aventure>(apiAventureById + '/aventure/' + id);
  }

}
