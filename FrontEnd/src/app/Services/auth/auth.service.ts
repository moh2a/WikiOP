import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Utilisateur} from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private utilisateurService: UtilisateurService) { }
  public isAuthenticated(): boolean {
  	let jwtHelper: JwtHelperService = new JwtHelperService();
  	let currentUser = this.utilisateurService.currentUserValue;
  	if(currentUser==null){
  		return false;
  	}
  	const token = currentUser.token
  	
    //const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
