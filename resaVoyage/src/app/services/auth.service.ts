import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiLogin, ROLE_ADMIN, apiUserByusername } from 'src/shared/constant';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenUser: string; private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient, ) {
  this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>(apiLogin, { username, password }, { observe: 'response' }).pipe(map(response => {
      // login successful if there's a jwt token in the response        
      if (response && response.headers.get('Authorization').substring(7)) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes         
        this.tokenUser = response.headers.get('Authorization').substring(7);
        localStorage.setItem('currentUser', this.tokenUser);
        this.currentUserSubject.next(this.tokenUser);
      }
      const decodedToken = jwt_decode(this.tokenUser);
      console.log("token ", decodedToken);
      return this.tokenUser;
    }));
  }
  userByUsername(username: string) : Observable<User> {
    return this.http.get<User>(apiUserByusername + '/utilisateur/username/' + username);
  }

  userByUserid(idutilisateur: number) : Observable<User> {
    return this.http.get<User>(apiUserByusername + '/utilisateur/id/' + idutilisateur);
  }

  logout() {
    // remove user from local storage to log user out   
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}