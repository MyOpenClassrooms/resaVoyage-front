
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiPayment } from 'src/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {}


chargeCard(token: string) {
    //const headers = new Headers({'token': token, 'amount': 100});
 return this.http.post(apiPayment + '/charge' , {},  {
              headers: new HttpHeaders()
                .set('token', token)
                .set('amount', '100')
      })
      
  }
}