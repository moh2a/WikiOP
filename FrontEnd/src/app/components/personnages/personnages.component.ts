import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonnagesService } from 'src/app/Services/Personnages/personnages.service';
import { Personnage } from 'src/app/models/personnage';
@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {
  personnagesList: Personnage[];
  constructor(private personnagesService: PersonnagesService) { }

  ngOnInit(): void {
    this.personnagesService.getPersonnages()
    .subscribe(
                data => {
                  this.personnagesList = data as Personnage[];

                },
                error => {
                  console.log(error);
                });

  }
  onSubmit(){}
}
