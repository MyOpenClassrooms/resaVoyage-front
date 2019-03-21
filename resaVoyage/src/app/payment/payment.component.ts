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
  commandeUpdated: Commande;
  ngOnInit() {
    this.idCommand = this.activatedRoute.snapshot.params['id'];
    console.log("command_id ", this.idCommand);
    this.getCommandeById( this.idCommand);
  }
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
        this.getUpdateCommande(this.idCommand, this.commandeUpdated);
        console.log("commmdeupdatedcarge credit ",  this.commandeUpdated)
        this.message = `Paiment effectué avec succés ${response.card.id}.`;
        form.cardNumber.value = '';
        form.expMonth.value = '';
        form.expYear.value = '';
      } else {
        this.message = response.error.message;
        this.errorMessage = this.message;
        console.log("errorMessage", this.errorMessage);
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
  chargeCard(token: string) {
    return this.paymentService.chargeCard(token).pipe(first()).subscribe(resp => {
      console.log("payementtttt ", resp);
    }, (error) => {
      console.log(error);
      switch (true) {
        case error.status === 400 || error.status === 401: {
          this.errorMessage = 'Login ou mot de passe incorrect';
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
      amount: 5000
    });
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
