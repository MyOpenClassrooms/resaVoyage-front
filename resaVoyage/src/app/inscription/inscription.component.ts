import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  dataSaved = false;
  f: any;
  message = null;
  idaventure;
  username;
  title;
  idutilisateur;
  utilisateurs: User[] = [];
  user;

  utilisateur: User = { idutilisateur: null, username: '', email:'', password: '', firstname: '', lastname: '', address: '', postcode: '', phonenumber: '', role: '' };
  constructor(private authService: AuthService, private formbulider: FormBuilder) { }

  ngOnInit() {
    this.f = this.formbulider.group({
      username: [''],
      email: [''],
      password: [''],
      firstname: [''],
      lastname: [''],
      address: [''],
      postcode: [''],
      phonenumber: [''],
      role: 'ADMIN',
    });
  }

  onFormSubmit() {

    this.dataSaved = false;
    const utilisateur = this.f.value;
    this.inscrire(utilisateur);
    this.f.reset();
  }

  inscrire(utilisateur: User) {
    this.authService.signin(utilisateur).subscribe(
      () => {
        this.dataSaved = true;
        this.message = 'Your Account Has Been Successfully Created !';
        this.f.value();
        this.f.reset();
      }
    );
  }

}
