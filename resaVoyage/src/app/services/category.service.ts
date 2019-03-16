import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiCategory } from 'src/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getAllCategories() {
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});*/
    return this.http.get( apiCategory + '/getAll',
      {

        headers: new HttpHeaders()
        /*.set('Access-Control-Allow-Origin', '*')*/
          .set('Content-Type', 'application/x-www-form-urlencoded')
          /* .set('Access-Control-Allow-Origin', '*')*/
          //.set('Authorization', 'Basic ' + btoa('test:test123'))
      })

  }

}
