import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiAventure, apiAventureById, apiCommande} from 'src/shared/constant';
import {Observable} from "rxjs";
import {Aventure} from "../../shared/models/aventure";

@Injectable({
  providedIn: 'root'
})
export class DetailAventureService {

  constructor(private http: HttpClient) {}

  getAventureById(id:number):Observable<Aventure>{
    return this.http.get<Aventure>(apiAventureById + '/aventure/' + id);
  }

}
