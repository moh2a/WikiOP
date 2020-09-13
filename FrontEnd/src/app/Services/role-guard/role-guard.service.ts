import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(private utilisateurService: UtilisateurService,public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    let currentUser = this.utilisateurService.currentUserValue;
  	if(currentUser==null){
  		return false;
  	}
  	const token = currentUser.token
    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload);
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
        return true;
  }
}
