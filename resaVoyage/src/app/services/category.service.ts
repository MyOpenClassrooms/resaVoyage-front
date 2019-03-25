import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiCategory, apiCommentaire} from 'src/shared/constant';
import {Observable} from "rxjs";
import {Commentaire} from "../../shared/models/commentaire";
import {Category} from "../../shared/models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get( apiCategory + '/getAll')
  }

}
