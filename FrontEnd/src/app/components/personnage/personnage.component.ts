import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnagesService } from 'src/app/Services/Personnages/personnages.service';
import { Personnage } from 'src/app/models/personnage';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit {
  personnageId: number;
  personnage: Personnage;
  urlPhoto: string;
  constructor(private route: ActivatedRoute, private personnagesService: PersonnagesService) {
  this.personnage = new Personnage();
   }

  ngOnInit(): void {
  	this.route.params.subscribe(params => {
      this.personnageId = params['id'];
    })
    this.getPersonnageById();
  }
  getPersonnageById():void{
  	this.personnagesService.getPersonnageById(this.personnageId)
    .subscribe(p => {
      this.personnage = p[0] as Personnage;
      this.urlPhoto="http://localhost:8080/uploads/"+this.personnage.Photo;
      //this.colorId = p.Color[0].AttributeValueId;
      //this.sizeId = p.Size[0].AttributeValueId;
    })
  }
}
