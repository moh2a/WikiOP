import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WikiOP';
  constructor(){
  	const serverURL = 'http://localhost:8080/api/';
    //const serverURL = 'https://turing-backend-v2.herokuapp.com/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
