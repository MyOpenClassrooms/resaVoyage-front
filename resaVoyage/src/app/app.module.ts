import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { CommandeService } from './services/commande.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AventureComponent } from './aventure/aventure.component';
import { CategoryComponent } from './category/category.component';
import { DetailAventureComponent } from './detail-aventure/detail-aventure.component';
import {AddCommandeComponent} from './add-commande/add-commande.component';
import {PaymentComponent} from './payment/payment.component';
import {PaymentService} from './services/payment.service';
import { FormsModule } from '@angular/forms';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommentaireService } from './services/commentaire.service';
import { InscriptionComponent } from './inscription/inscription.component';
import {AventureByCatComponent, TruncatePipe} from './aventure-by-cat/aventure-by-cat.component';
import { AllAventureComponent } from './all-aventure/all-aventure.component';




@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    HeaderComponent,
    LoginComponent,
    AventureComponent,
    CategoryComponent,
    DetailAventureComponent,
    PaymentComponent,
    AddCommandeComponent,
    CommentaireComponent,
    InscriptionComponent,
    AventureByCatComponent,
    TruncatePipe,
    AllAventureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [ 
    AuthGuard,
    AuthService,
    CommandeService,
    PaymentService,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CommentaireService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
