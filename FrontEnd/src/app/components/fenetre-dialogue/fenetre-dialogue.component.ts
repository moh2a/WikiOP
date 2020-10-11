import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-fenetre-dialogue',
  templateUrl: './fenetre-dialogue.component.html',
  styleUrls: ['./fenetre-dialogue.component.scss']
})
export class FenetreDialogueComponent implements OnInit {
  form: FormGroup;
  description:string;
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<FenetreDialogueComponent>) {} 
  ngOnInit(): void {
  	this.description = "description";
  	this.form = this.formBuilder.group({
            description: [this.description]
        });
  }
  close(): void{
  	this.dialogRef.close();
  }
  save(): void{
  	this.dialogRef.close();
  }

}
