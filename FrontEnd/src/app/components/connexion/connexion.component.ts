import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
  	private utilisateurService: UtilisateurService,
              private router: Router) { }
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
  	this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  onSubmit(){
  	this.submitted = true;
    
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.utilisateurService.Login(this.f.Email.value, this.f.Password.value)
        .subscribe(
                data => {
                  this.router.navigate(['/home']);
                  //this.router.navigate(['/products']);
                },
                error => {
                    console.log("Mauvais mdp");
                });
        window.location.reload();
  }
  
}
