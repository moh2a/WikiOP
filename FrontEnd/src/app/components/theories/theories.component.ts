import { Component, OnInit } from '@angular/core';
import {Theorie} from 'src/app/models/theorie';
import {TheorieService} from 'src/app/Services/theorie/theorie.service';
@Component({
  selector: 'app-theories',
  templateUrl: './theories.component.html',
  styleUrls: ['./theories.component.scss']
})
export class TheoriesComponent implements OnInit {
listeDesTheories: Theorie[];
  constructor(private theorieServices: TheorieService) { }

  ngOnInit(): void {
  	
  }

}
