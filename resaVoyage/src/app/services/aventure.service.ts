import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiAventure, apiAventureById, apiCommande} from 'src/shared/constant';
import {Observable} from "rxjs";
import {Aventure} from "../../shared/models/aventure";

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

}
