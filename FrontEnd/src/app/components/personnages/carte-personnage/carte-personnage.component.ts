import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'src/app/models/personnage';
@Component({
  selector: 'app-carte-personnage',
  templateUrl: './carte-personnage.component.html',
  styleUrls: ['./carte-personnage.component.scss']
})
export class CartePersonnageComponent implements OnInit {
  @Input('personnageData') personnage: Personnage;
  constructor() { }

  ngOnInit(): void {
  }

}
