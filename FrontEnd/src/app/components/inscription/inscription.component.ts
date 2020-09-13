import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
	registerForm: FormGroup;
	utilisateur: Utilisateur = new Utilisateur();
	submitted = false;
  type=['Pirate','Marine'];
  constructor(private formBuilder: FormBuilder,
              private utilisateurService: UtilisateurService,
              private router: Router) { }

  ngOnInit(): void {
  	this.registerForm = this.formBuilder.group({
        Nom: ['', Validators.required],
        Prenom: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Type: ['', Validators.required],
        Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.utilisateur = this.registerForm.value;
        this.utilisateur = this.registerForm.value;
        this.utilisateurService.AddNewUtilisateur(this.utilisateur)
            .subscribe(a => {
              if(a){
                this.router.navigate(['/home']);
              }
            })
  }
}
