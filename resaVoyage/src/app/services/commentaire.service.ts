import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiCommentaire, apiAddCommentaire } from 'src/shared/constant';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/shared/models/commentaire';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  formData: Commentaire;

  constructor(private http: HttpClient) {

  }

  getCommentsByAdventure(id: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(apiCommentaire + '/idaventure/' + id);

  }


  saveCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Commentaire>(apiAddCommentaire, commentaire, httpOptions);

  }

}
