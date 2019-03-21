import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiCommentaire} from 'src/shared/constant';
import { Observable} from 'rxjs';
import { Commentaire } from 'src/shared/models/commentaire';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  formData : Commentaire; 
  
  constructor(private http: HttpClient) { 
   
  }
  
  getCommentsByAdventure(id : number) : Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(apiCommentaire + '/idaventure/' + id);
  
}

saveCommentaire (commentaire): Observable<Commentaire> {
  return this.http.post<Commentaire>(apiCommentaire, commentaire, httpOptions);
}

postCommentaire(formData: Commentaire){
 return  this.http.post(apiCommentaire+'/commentaire/save', formData);
}
  
}
