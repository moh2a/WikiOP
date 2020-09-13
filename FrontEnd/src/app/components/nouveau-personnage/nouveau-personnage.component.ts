import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Personnage } from 'src/app/models/personnage';
import { PersonnagesService } from 'src/app/Services/Personnages/personnages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-personnage',
  templateUrl: './nouveau-personnage.component.html',
  styleUrls: ['./nouveau-personnage.component.scss']
})
export class NouveauPersonnageComponent implements OnInit {
  registerForm: FormGroup;
  personnage: Personnage = new Personnage();
  selectedFile: File;
  imageValide=true;
  selectionImage=false;
  submitted=false;
  extension="";
  constructor(private formBuilder: FormBuilder,
              private personnagesService: PersonnagesService,
              private router: Router) { }

  ngOnInit(): void {
  	this.registerForm = this.formBuilder.group({
        Nom: ['', Validators.required],
        Prenom: ['', Validators.required],
        Age: [Number,null],
        Type: ['',null],
        Taille: [Number,Validators.required],
        Introduction: ['', Validators.required],
        Description: ['', Validators.required],
        Photo: ['',null],
        Fruit: ['',null]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted=true;
  	if (this.registerForm.invalid) {
            return;
        }
    if(this.selectionImage){
      var nn =this.registerForm.value.Nom+this.registerForm.value.Prenom+this.extension;
      this.registerForm.value.Photo = nn;
      this.personnagesService.UploadPhoto(this.selectedFile, nn)
    .subscribe(a => {
                          })
    }
    this.personnage = this.registerForm.value;
    this.personnagesService.AddNewPersonnage(this.personnage)
    .subscribe(a => {
              if(a){
                this.router.navigate(['/personnages']);
              }
            })
            
    
    
  }
  onFileChanged(event){

    this.selectedFile = event.target.files[0];
    if(this.selectedFile.type == "image/png" || this.selectedFile.type=="image/jpg"
     || this.selectedFile.type=="image/gif"|| this.selectedFile.type=="image/jpeg"){
    this.selectionImage=true;
      if(this.selectedFile.type == "image/jpg"|| this.selectedFile.type=="image/jpeg"){
        this.extension=".jpeg";
      }
      else if(this.selectedFile.type == "image/png"){
        this.extension=".png";
      }
      else if(this.selectedFile.type == "image/gif"){
        this.extension=".gif";
      }
     
    }
    else{
      this.imageValide=false;
      document.getElementById('Photo')["value"]= null;
      return;
    }

  }
}
