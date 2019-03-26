import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { first } from 'rxjs/operators';
import { Commande } from 'src/shared/models/commande';
import { Router, ActivatedRoute } from '@angular/router';
import { AventureService } from '../services/aventure.service';
import { Session } from 'src/shared/models/session';
import { map } from 'rxjs/operators';
interface ItemCommande {
  id;
  aventure;
  date;
  status;
  prix;
};
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  allCommandes: Commande[] = [];
  public commandesByUser: Array<ItemCommande> = [];
  sessions: Session[] = [];
  session: Session;
  user;
  userId;
  tempList = [];
  
  private itemCommande: ItemCommande = {
    id: '',
    aventure: '',
    date: "",
    status: "",
    prix: "",
  };
  public id: number;
  constructor(private commandeService: CommandeService, private aventureService: AventureService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllCommande(JSON.parse(sessionStorage.getItem('idUser')));
    // this.getSessionById(4);
    /*  this.session = this.getSessionById(this.user);
     console.log("ussssss ",  this.user.idutilisateur ); */

  }
  btnClick = function () {
    this.router.navigate(['/commande'], { queryParams: { id: '2' } });
  }
  /**
   * 
   */
  getAllCommande(UserId: number) {
    this.commandeService.getAllCommande(UserId).pipe(first()).subscribe(commandes => {
      this.allCommandes = commandes;
      commandes.forEach(commande => {
        this.aventureService.getSessionById(commande.sessionId).pipe(first()).subscribe(res => {
          this.session = res;
          this.sessions.push(this.session);
          this.itemCommande = {
            id: '',
            aventure: '',
            date: "",
            status: "",
            prix: "",
          };
          this.itemCommande.id = commande.id;
          this.itemCommande.date = commande.date;
          this.itemCommande.status = commande.status;
          this.itemCommande.aventure = this.session.aventure.title;
          this.itemCommande.prix = this.session.aventure.price;
          this.commandesByUser.push(this.itemCommande);

        });

      });



      /*  for(let i =0 ; i < this.allCommandes.length; i++){  
         this.itemCommande= {
          aventure : '',
          date:"",
          status: "",
          prix:"",
        };
          this.itemCommande.date = this.allCommandes[i].date;
          this.itemCommande.status = this.allCommandes[i].status;
          this.commandesByUser.push(this.itemCommande);
      }
     */
      console.log("commandesByUser  ", this.commandesByUser);
    });


  }
  getCommandeById(id: number) {
    const commande = this.allCommandes.find(
      (s) => {
        return s.id === id;

      }
    );
    sessionStorage.setItem('commande', JSON.stringify(commande));
    return commande;
  }
  getSessionById(id: number) {
    return this.aventureService.getSessionById(id).pipe(first()).subscribe(res => {
      this.session = res;

    });

  }


}
