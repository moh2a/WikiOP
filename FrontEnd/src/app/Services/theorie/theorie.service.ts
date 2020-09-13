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
  	return this.http.get<Theorie[]>(`${this.url}theorie/getAllTheories`);
  }
  getTheorieById(theorieId:number):Observable<Theorie>{
    return this.http.get<Theorie>(`${this.url}theorie/getTheorieById?theorieId=${theorieId}`);
  }
}
/*SELECT 
    theorie,
    auteur,
    id,
    titre,
    COUNT(V.id_theorie) AS vote
FROM 
        theorie T
    LEFT JOIN 
        votes  V
    ON 
        T.id = V.id_theorie*/