import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiCommande, apiSessionById, apiCommandeById, apiUpdateCommande, apiSaveCommande } from 'src/shared/constant';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { Commande } from 'src/shared/models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getAllCommande(userId: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(apiCommande + '/userId/' + userId);

  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(apiCommandeById + '/findCommandById/' + id);
  }

  updateCommande(id, commande): Observable<Commande> {
    return this.http.put<Commande>(apiUpdateCommande + '/update/' + id, commande);
  }

 saveCommande(commande : Commande){
    return this.http.post(apiSaveCommande + '/save/', commande);
  }
}
