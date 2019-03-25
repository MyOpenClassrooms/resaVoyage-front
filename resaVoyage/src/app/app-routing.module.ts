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
import {AventureByCatComponent} from "./aventure-by-cat/aventure-by-cat.component";
import {AllAventureComponent} from "./all-aventure/all-aventure.component";

const routes: Routes = [
  { path : '', component : AventureComponent},
  { path : 'aventure', component : AventureComponent},
  { path : 'aventure/:id', component : DetailAventureComponent, canActivate: [AuthGuard]},
  { path : 'allAventures', component : AllAventureComponent},
  { path : 'aventureByCat/:id', component : AventureByCatComponent},
  { path : 'addCommande/:id', component : AddCommandeComponent, canActivate: [AuthGuard]},
  { path : 'commande', component : CommandeComponent , canActivate: [AuthGuard]},
  { path : 'payment/commande/:id/:prix', component : PaymentComponent },
  { path : 'category', component : CategoryComponent },
  { path : 'login', component : LoginComponent},
  {path: 'commentaire/:id', component: CommentaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
