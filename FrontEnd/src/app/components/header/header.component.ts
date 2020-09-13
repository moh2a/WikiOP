import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	authentified=false;
  constructor(private utilisateurService: UtilisateurService,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  		this.authentified=this.authService.isAuthenticated();
  }
   deco():void{
  	this.utilisateurService.logout();
  	this.router.navigate(['/home']);
  }
  profil(){
    this.router.navigate(['/admin']);
  }
  connexion(){
    this.router.navigate(['/connexion']);
  }
  Accueil(){
    this.router.navigate(['/home']);
  }
  Personnages(){
    this.router.navigate(['/personnages']);
  }
  Films(){
    this.router.navigate(['/home']);
  }
  Theories(){
    this.router.navigate(['/theories']);
  }
  inscription(){
    this.router.navigate(['/inscription']);
  }
   myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
}
