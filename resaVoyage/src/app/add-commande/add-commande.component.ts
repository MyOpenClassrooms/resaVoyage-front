import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from 'src/shared/models/commande';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/shared/models/session';
import { Aventure } from 'src/shared/models/aventure';
import { AventureService } from '../services/aventure.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  commandForm: FormGroup;
  commande : Commande;
  aventureId: number;
  sessions: Session[] = [];
  aventure: Aventure;
  user;
  constructor(private commandeService: CommandeService, private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute, private aventureService: AventureService) { }

  ngOnInit() {
    this.commandForm = this.formBuilder.group({
      sessionId: ['', Validators.required]
  });

  this.aventureId = this.activatedRoute.snapshot.params['id'];
  this.aventureService.getAventureById(this.aventureId).pipe(first()).subscribe(aventure => {
  this.aventure = aventure;
  this.sessions =  this.aventure.sessions;
  console.log("aventureeeeeeee ", this.aventure );
  console.log("sessionnn ",  this.sessions );
 });

  }
  get f() { return this.commandForm.controls; }

  saveCommande() {
  this.user = sessionStorage.getItem('user');
  console.log("session id ",  this.f.sessionId.value );
//  this.commande.sessionId = this.f.sessionId.value;
  this.commande.userId = this.user.id;
  this.commande.date = new Date();
  this.commande.status = true;
  console.log("commande to save ",  this.commande );
  this.commandeService.saveCommande(this.commande); 

    };

  }

