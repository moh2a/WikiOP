import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'src/app/models/utilisateur';
import { BehaviorSubject,Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
	private currentUserSubject: BehaviorSubject<Utilisateur>;
    public currentUser: Observable<Utilisateur>;
  	url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) {   
  	this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}
    public get currentUserValue(): Utilisateur {
        return this.currentUserSubject.value;
    	}
  	AddNewUtilisateur(utilisateur: Utilisateur): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}utilisateur/addNewUtilisateur`, utilisateur);
  	}
  	Login(email: string, password : string): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.url}utilisateur/login`,  {Email: email, Password: password})
    .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
 
  	}
    logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
    }
  	
}
