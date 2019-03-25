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
  commande: Commande = { id: null, userId: null, sessionId: null, date: null, status: null };
  aventure: Aventure = { id: null, title: '', description: '', location: '', price: null,nbparticipant: null, image: '', sessions: null, category_id: null };
  aventureId: number;
  sessions: Session[] = [];
  userId;
  f: any;   
  errorMessage: string;
  message: string;
  constructor(private commandeService: CommandeService, private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute, private aventureService: AventureService) { }

  ngOnInit() {
    this.commandForm = this.formBuilder.group({
      sessionId: ['', Validators.required]
    });

    this.aventureId = this.activatedRoute.snapshot.params['id'];
    this.aventureService.getAventureById(this.aventureId).pipe(first()).subscribe(aventure => {
      this.aventure = aventure;
      this.sessions = this.aventure.sessions;
      console.log("aventureeeeeeee ", this.aventure);
      console.log("sessionnn ", this.sessions);
    });

      this.f = this.formBuilder.group({
        userId: sessionStorage.getItem('idUser'),
        sessionId: [''],
        status: false,
      date: new Date(),
    });
  }


  onFormSubmit() {
     const commande = this.f.value;
     if (this.f.value.sessionId != ''){
    
     this.saveCommande(commande);
    // console.log("commande to save ",commande);
     this.f.reset(); 
     }else {
      this.errorMessage = "Veuillez choisir une session"
     }

  }

  saveCommande(commande: Commande) {
    this.commandeService.saveCommande(commande).subscribe(
      () => {

        this.message ="Commande effectuée avec succés"
        this.errorMessage=null;
        console.log("commande value",commande);
      },
      (error) => {
        if(error.status == 504){
          this.errorMessage = "Une erreur s'est produite veuillez réessayer plutart"
          this.message= null;
        }else if (error.status == 500){
          this.errorMessage = "Une erreur serveur s'est produite"
          this.message= null;
        }
       // console.log("errrrrrrrrrrrrror",error);
      });

  }
}

