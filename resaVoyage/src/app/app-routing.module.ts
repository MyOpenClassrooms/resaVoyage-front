import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import {CategoryComponent} from "./category/category.component";
import {AventureComponent} from "./aventure/aventure.component";
import {DetailAventureComponent} from "./detail-aventure/detail-aventure.component";
import { PaymentComponent } from './payment/payment.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path : '', component : AventureComponent},
  { path : 'aventure', component : AventureComponent},
  { path : 'aventure/:id', component : DetailAventureComponent, canActivate: [AuthGuard]},
  { path : 'addCommande/:id', component : AddCommandeComponent, canActivate: [AuthGuard]},
  { path : 'commande', component : CommandeComponent , canActivate: [AuthGuard]},
  { path : 'payment/commande/:id', component : PaymentComponent },
  { path : 'category', component : CategoryComponent },
  { path : 'login', component : LoginComponent},
  { path : 'signin', component : InscriptionComponent},
  {path: 'commentaire/:id', component: CommentaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
