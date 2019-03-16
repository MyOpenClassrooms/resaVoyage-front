import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { first } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAUth = false;
  user ;
  nom;
  prenom;
  id;
  username;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.currentUser){
      this.isAUth = true;
      
    }
   
    console.log("isAUthIn ", this.isAUth);
    console.log("username ", sessionStorage.getItem('username'));
    this.username = sessionStorage.getItem('username');
    this.userByUsername(this.username);
    this.user = sessionStorage.getItem('user');
    console.log("utilisateurdebut",  this.user);
   /*  this.prenom = sessionStorage.getItem('prenom');
    this.id = sessionStorage.getItem('id'); */
   
  
  }
  userByUsername(username: string) {
  return  this.authService.userByUsername(username).subscribe(user => {
    this.user = user;  
    sessionStorage.setItem('idUser', JSON.stringify(user.idutilisateur));
    console.log("iduserdegj", sessionStorage.getItem('idUser'));
    sessionStorage.setItem('user', this.user);
        },
        (error) => {
          console.log(error);
        }
    )}

  logout() {
   
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.isAUth = false;
    console.log("isAUthOut ", this.isAUth);

  }
}
