import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import {CategoryComponent} from "./category/category.component";
import {AventureComponent} from "./aventure/aventure.component";

const routes: Routes = [
  { path : '', component : AventureComponent},
  { path : 'commande', component : CommandeComponent},
  { path : 'aventure', component : AventureComponent},
  { path : 'category', component : CategoryComponent},
  { path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
