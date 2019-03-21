import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import {CategoryComponent} from "./category/category.component";
import {AventureComponent} from "./aventure/aventure.component";
import {DetailAventureComponent} from "./detail-aventure/detail-aventure.component";

const routes: Routes = [
  { path : '', component : AventureComponent},
  { path : 'commande', component : CommandeComponent},
  { path : 'aventure', component : AventureComponent},
  { path : 'detailAventure', component : DetailAventureComponent},
  { path : 'category', component : CategoryComponent},
  { path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
