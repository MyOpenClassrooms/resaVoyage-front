import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

import {CategoryComponent} from "./category/category.component";
import {AventureComponent} from "./aventure/aventure.component";
import { PaymentComponent } from './payment/payment.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

const routes: Routes = [
  { path : '', component : AventureComponent},
  { path : 'addCommande', component : AddCommandeComponent},
  { path : 'commande', component : CommandeComponent , canActivate: [AuthGuard]},
 /*  { path : 'aventure', component : AventureComponent }, */
  { path : 'commande/payment/:id', component : PaymentComponent },
  { path : 'category', component : CategoryComponent , canActivate: [AuthGuard]},
  { path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
