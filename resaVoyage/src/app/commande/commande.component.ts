import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public allCommandes:any = [];
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.getAllCommande();
  }
/**
 * 
 */
  getAllCommande() {
    this.commandeService.getAllCommande().subscribe((res)=>{
    this.allCommandes = res;
    console.log("tessssssssst ",  this.allCommandes );
    }); 

  }

}
