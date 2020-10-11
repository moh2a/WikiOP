import { Component, OnInit } from '@angular/core';
import { PersonnagesService } from 'src/app/Services/Personnages/personnages.service';
import { Personnage } from 'src/app/models/personnage';
import { FenetreDialogueComponent } from 'src/app/components/fenetre-dialogue/fenetre-dialogue.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {
  personnagesList: Personnage[];
  constructor(private personnagesService: PersonnagesService,private dialog: MatDialog) { }

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
  initFenetreDialogue(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(FenetreDialogueComponent, dialogConfig);
  }
}
