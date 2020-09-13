import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Theorie} from 'src/app/models/theorie';
@Injectable({
  providedIn: 'root'
})
export class TheorieService {
	url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  getAllTheories():Observable<Theorie[]>{
  	return this.http.get<Theorie[]>(`${this.url}personnages/getAllTheories`);
  }
}
