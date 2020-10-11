import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonnagesComponent } from './components/personnages/personnages.component';
import { CartePersonnageComponent } from './components/personnages/carte-personnage/carte-personnage.component';
import { NouveauPersonnageComponent } from './components/nouveau-personnage/nouveau-personnage.component';
import { PersonnageComponent } from './components/personnage/personnage.component';
import { AdminComponent } from './components/admin/admin.component';
import { TheoriesComponent } from './components/theories/theories.component';
import { TheorieComponent } from './components/theorie/theorie.component';
import { CarteTheorieComponent } from './components/theories/carte-theorie/carte-theorie.component';
import { CarteTheorieMomentComponent } from './components/theories/carte-theorie-moment/carte-theorie-moment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FenetreDialogueComponent } from './components/fenetre-dialogue/fenetre-dialogue.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InscriptionComponent,
    ConnexionComponent,
    PersonnagesComponent,
    CartePersonnageComponent,
    NouveauPersonnageComponent,
    PersonnageComponent,
    AdminComponent,
    TheoriesComponent,
    TheorieComponent,
    CarteTheorieComponent,
    CarteTheorieMomentComponent,
    FenetreDialogueComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, FontAwesomeModule, BrowserAnimationsModule,
    MatButtonModule,MatDialogModule,MatInputModule,MatFormFieldModule,MatProgressBarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
