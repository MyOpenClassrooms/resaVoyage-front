import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiCommande, apiSessionById } from 'src/shared/constant';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { Commande } from 'src/shared/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) {}

  /**
   * Get filleul from API by its CM_ID 
   * @param id cm's id
   */
  getAllCommande(userId : number): Observable<Commande[]> {
      return this.http.get<Commande[]>(apiCommande + '/userId/' + userId);
    
  }
  getSessionById(id : number) {
      return this.http.get(apiSessionById + '/' + id);
    
  }
}
