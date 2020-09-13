import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheorieService } from 'src/app/Services/theorie/theorie.service';
import { Theorie } from 'src/app/models/theorie';
@Component({
  selector: 'app-theorie',
  templateUrl: './theorie.component.html',
  styleUrls: ['./theorie.component.scss']
})
export class TheorieComponent implements OnInit {
	theorieId: number;
	theorie : Theorie;
  constructor(private route: ActivatedRoute, private theorieService: TheorieService) { 
  	this.theorie = new Theorie();
  }

  ngOnInit(): void {
  	this.route.params.subscribe(param=>{
  		this.theorieId= param['id'];
  	})
  	this.getPersonnageById();
  }
  getPersonnageById():void{
  	this.theorieService.getTheorieById(this.theorieId)
    .subscribe(p => {
      this.theorie = p[0] as Theorie;
      //this.colorId = p.Color[0].AttributeValueId;
      //this.sizeId = p.Size[0].AttributeValueId;
    })
  }

}
