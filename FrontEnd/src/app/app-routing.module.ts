import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PersonnagesComponent } from './components/personnages/personnages.component';
import { PersonnageComponent } from './components/personnage/personnage.component';
import { TheoriesComponent } from './components/theories/theories.component';
import { TheorieComponent } from './components/theorie/theorie.component';
import { NouveauPersonnageComponent } from './components/nouveau-personnage/nouveau-personnage.component';
import { AuthGuardService as AuthGuard } from 'src/app/Services/auth-guard/auth-guard.service';
import { RoleGuardService as RoleGuard } from 'src/app/Services/role-guard/role-guard.service';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'inscription', component: InscriptionComponent},
	{ path: 'connexion', component: ConnexionComponent},
	{ path: 'personnages', component: PersonnagesComponent},
	{ path: 'theories', component: TheoriesComponent},
	{ path: 'theorie/:id', component: TheorieComponent},
	{ path: 'ajouter-personnage', component: NouveauPersonnageComponent, canActivate: [AuthGuard]},
	{ path: 'personnage/:id', component: PersonnageComponent },
	{ path: 'admin', component: AdminComponent, canActivate: [RoleGuard], 
		data: { expectedRole: 'Administrateur'} },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
