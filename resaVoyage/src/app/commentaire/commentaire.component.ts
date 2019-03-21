import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from '../services/commentaire.service';
import {AventureService} from "../services/aventure.service";
import { Commentaire } from 'src/shared/models/commentaire';
import { Aventure } from 'src/shared/models/aventure';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  commentaireForm: FormGroup;
  idaventure;
  adventures: Aventure[];
  title;
  allComments : Commentaire[];
  comments: Commentaire[];
  content;
  date;
  idutilisateur;
  user;  
  key; 
  item; 
  
 

  aventure:   Aventure = {id: null, title: '', description: '', location: '', price: null, image: '', category_id: null };
  commentaire: Commentaire = { idcommentaire: null , idutilisateur: null , idaventure: null, content: '', date: null};
  constructor( private route: ActivatedRoute, private aventureService: AventureService, private commentaireService: CommentaireService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) 
{ }
  ngOnInit() {
   
   this.getCommentsByAdventure(this.route.snapshot.params['id']);
   
   this.user = sessionStorage.getItem('user');
    //JSON.stringify(this.user);
   //console.log('testtt',this.user);

   
  }
  
  onFormSubmit(form:NgForm) {
    
    this.commentaireService.saveCommentaire(form);
  }

  getCommentsByAdventure(idaventure : number) {
    return this.commentaireService.getCommentsByAdventure(idaventure).subscribe(commentaires => {
    this.allComments = commentaires;
    
});
}
 
/*getAdventureById(id : number) {
  return this.aventureService.getAventureById(id).subscribe(details => {
  this.adventures= details;
  
});
}*/

}
