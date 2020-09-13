import { Component, OnInit, Input } from '@angular/core';
import {Theorie} from 'src/app/models/theorie';
@Component({
  selector: 'app-carte-theorie',
  templateUrl: './carte-theorie.component.html',
  styleUrls: ['./carte-theorie.component.scss']
})
export class CarteTheorieComponent implements OnInit {
  @Input('theorieData') theorie: Theorie;
  constructor() { }

  ngOnInit(): void {
  }

}
