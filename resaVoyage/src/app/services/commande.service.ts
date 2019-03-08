import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiCommande } from 'src/shared/constant';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) {}

  /**
   * Get filleul from API by its CM_ID 
   * @param id cm's id
   */
  getAllCommande() {
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});*/
    return this.http.get( apiCommande + '/findAll',
    {
      
              headers: new HttpHeaders()
                /*.set('Access-Control-Allow-Origin', '*')*/
                .set('Content-Type', 'application/x-www-form-urlencoded')
               /* .set('Access-Control-Allow-Origin', '*')*/
                .set('Authorization', 'Basic ' + btoa('test:test123'))
      })
    
  }

}
