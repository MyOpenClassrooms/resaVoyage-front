import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from '../services/commentaire.service';
import { AventureService } from "../services/aventure.service";
import { Commentaire } from 'src/shared/models/commentaire';
import { Aventure } from 'src/shared/models/aventure';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { FormBuilder } from '@angular/forms';
import {Session} from "../../shared/models/session";
interface Comment {
  idcommentaire;
  idaventure;
  idutilisateur;
  content;
  date;
};
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  dataSaved = false;
  f: any;
  message = null;
  idaventure;
  username;
  adventures: Aventure[];
  title;
  allComments: Commentaire[];
  comments: Commentaire[];
  content;
  date;
  idutilisateur;
  utilisateurs: User[] = [];
  utilisateur: User;
  user;
  public commentsByAdventure: Array<Comment> = [];
  private comment: Comment = {
    idcommentaire: '',
    idaventure: '',
    idutilisateur: "",
    content: "",
    date: "",

  };

  aventure:   Aventure = {id: null, title: '', description: '', location: '', price: null, nbparticipant:null, image: '', sessions: null ,category_id: null };
  commentaire: Commentaire = { idcommentaire: null, idutilisateur: null, idaventure: null, content: '', date: null };
  constructor(private route: ActivatedRoute, private aventureService: AventureService, private commentaireService: CommentaireService, private authService: AuthService, private router: Router, private formbulider: FormBuilder) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.userByUsername(this.username);
    this.user = sessionStorage.getItem('user');
    this.getCommentsByAdventure(this.route.snapshot.params['id']);
    this.f = this.formbulider.group({
      idutilisateur: sessionStorage.getItem('idUser'),
      idaventure: this.route.snapshot.params['id'],
      content: [''],
      date: new Date(),
    });
  }

  getCommentsByAdventure(idaventure: number) {
    this.commentaireService.getCommentsByAdventure(idaventure).pipe(first()).subscribe(commentaires => {
      this.allComments = commentaires;
      commentaires.forEach(commentaire => {
        this.authService.userByUserid(commentaire.idutilisateur).pipe(first()).subscribe(res => {
          this.utilisateur = res;
          this.utilisateurs.push(this.utilisateur);
          this.comment = {
            idcommentaire: '',
            idutilisateur: '',
            idaventure: '',
            content: '',
            date: '',
          };

          this.comment.idcommentaire = commentaire.idcommentaire;
          this.comment.idaventure = commentaire.idaventure;
          this.comment.idutilisateur = this.utilisateur.firstname;
          this.comment.content = commentaire.content;
          this.comment.date = commentaire.date;
          this.commentsByAdventure.push(this.comment);

        });

      });
      console.log("commentsByUser  ", this.commentsByAdventure);
    });

    return this.commentaireService.getCommentsByAdventure(idaventure).subscribe(commentaires => {
      this.allComments = commentaires;

    });
  }

  onFormSubmit() {

    this.dataSaved = false;
    const commentaire = this.f.value;
    this.createcommentaire(commentaire);
    this.f.reset();
  }

  createcommentaire(commentaire: Commentaire) {
    this.commentaireService.saveCommentaire(commentaire).subscribe(
      () => {
        this.dataSaved = true;
        this.message = 'Thank you for your comment !';
        this.f.value();
        this.f.reset();
      }
    );
  }

  userByUsername(username: string) {
    return this.authService.userByUsername(username).subscribe(user => {
      this.user = user;
      if (this.user != null) {
        sessionStorage.setItem('idUser', JSON.stringify(user.idutilisateur));
        sessionStorage.setItem('user', this.user);
      }
    },
      (error) => {
        console.log(error);
      }
    )
  }


}
