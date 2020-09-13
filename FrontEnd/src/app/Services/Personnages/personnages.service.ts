import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnage } from 'src/app/models/personnage';
@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {
  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  getPersonnages():Observable<Personnage[]> {
    return this.http.get<Personnage[]>(`${this.url}personnages/getAllPersonnages`);
  }
  AddNewPersonnage(personnage:Personnage){
  	return this.http.post<Personnage>(`${this.url}personnages/new`,personnage);
  }
  UploadPhoto(photo:File, nn:string){
  	const uploadData = new FormData();
    uploadData.append('myFile', photo, nn);
  	return this.http.post<FormData>(`${this.url}file-upload/newFile`, uploadData);
  }
  getPersonnageById(personnageId: number):Observable<Personnage> {
    return this.http.get<Personnage>(`${this.url}personnages/getPersonnageById?personnageId=${personnageId}`);
  }
}
