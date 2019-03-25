import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { first } from 'rxjs/operators';
import { _MatTabHeaderMixinBase } from '@angular/material/tabs/typings/tab-header';
import { Router, ActivatedRoute } from '@angular/router';
import { CommandeService } from '../services/commande.service';
import { Commande } from 'src/shared/models/commande';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public id: string;
  constructor(public activatedRoute: ActivatedRoute, private paymentService: PaymentService, 
    private router: Router, private route: ActivatedRoute, private commandeService: CommandeService) { }
  message: string;
  errorMessage: string;
  idCommand: number;
  prix;
  commandeUpdated: Commande;
  ngOnInit() {
    this.idCommand = this.activatedRoute.snapshot.params['id'];
    this.prix = this.activatedRoute.snapshot.params['prix'];
    this.getCommandeById(this.idCommand);
  }
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if(form.cardNumber.value != '' && form.expMonth.value != '' && form.expYear.value != '' && form.cvc.value != ''){
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token, this.prix);
        this.getUpdateCommande(this.idCommand, this.commandeUpdated);
        this.message = `Paiment effectué avec succés ${response.card.id}.`;
        console.log("message",   this.message)
        form.cardNumber.value = '';
        form.expMonth.value = '';
        form.expYear.value = '';
      } else {
       // this.errorMessage = response.error.message;
        console.log("messageeeeeee error", this.errorMessage);
      }
    }else {
      this.errorMessage ="Veuillez renseigner les champs"
    }
    });
  }
  getCommandeById(id : number) {
    return this.commandeService.getCommandeById(id)
    .pipe(first()).subscribe(res => { 
      res.status = true;
      this.commandeUpdated = res;
     console.log("commmdeupdated ",  this.commandeUpdated )
  });
  
  }
  chargeCard(token: string, montant: string) {
    return this.paymentService.chargeCard(token, montant).pipe(first()).subscribe(resp => {
      console.log("payementtttt ", resp);
    }, (error) => {
     /*  if(error.status == 504){
        this.errorMessage = "Une erreur s'est produite veuillez réessayer plutart"
      }else if (error.status == 400){
        this.errorMessage = "Une erreur serveur s'est produite"
      } */

      console.log(error);
      switch (true) {
        case error.status === 400 || error.status === 401: {
          this.errorMessage = 'Information incorrecte';
          break;
        }
        case error.status === 504: {
          this.errorMessage = 'Veuillez réessayer plutart!';
          break;
        }
        default: {
          this.errorMessage = 'Erreur de connexion';
          break;
        }
      } 
    });
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_pUnPeLqTb1nZaaID15CdPkxn',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.prix,
      
    });
    console.log("amount ", this.prix);
  }
 
  
  getUpdateCommande(id, commande) {
    return this.commandeService.updateCommande(id,commande )
    .pipe(first()).subscribe(res => { 
      res.status = true;
     this.commandeUpdated = res;
     console.log("commmdeupdated ",  res)
  });
  
  }

}
