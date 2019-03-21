import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAUth;
  user ;
  nom;
  prenom;
  id;
  username;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   
    this.isLoggIn();
    console.log("isAUth ", this.isAUth);
    console.log("username ", sessionStorage.getItem('username'));
    this.username = sessionStorage.getItem('username');
    this.userByUsername(this.username);
    this.user = sessionStorage.getItem('user');
  
  }
  userByUsername(username: string) {
  return  this.authService.userByUsername(username).subscribe(user => {
    this.user = user;  
  if (this.user != null){
    sessionStorage.setItem('idUser', JSON.stringify(user.idutilisateur));
    sessionStorage.setItem('user', this.user);
  }
        },
        (error) => {
          console.log(error);
        }
    )}

  isLoggIn(){
if (localStorage.getItem('currentUser') != null){
  return this.isAUth = true;
} else 
return this.isAUth = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    
  }
}
