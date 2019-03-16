import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { first } from 'rxjs/operators';
import { Commande } from 'src/shared/models/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  allCommandes: Commande[];
  session;
  user;
  userId;
  tempList = [];
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
  
    this.getAllCommande( JSON.parse(sessionStorage.getItem('idUser')));
   
   /*  this.session = this.getSessionById(this.user);
    console.log("ussssss ",  this.user.idutilisateur ); */

  }
/**
 * 
 */
  getAllCommande(UserId : number) {
    this.commandeService.getAllCommande(UserId).pipe(first()).subscribe(commandes => {
      this.allCommandes = commandes;
 /*      commandes.forEach (commande => {
       this.session =  this. getSessionById(commande.userId);
       console.log("session ",  this.session );
         this.tempList.push(commande.userId);
        }); */
        
        
  });

  }
  getSessionById(id : number) {
  return this.commandeService.getSessionById(id).pipe(first()).subscribe(res => {
    this.session = res;
});

}
}
