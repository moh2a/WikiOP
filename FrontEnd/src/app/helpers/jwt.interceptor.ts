import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur} from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/Services/Utilisateur/utilisateur.service';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private utilisateurService: UtilisateurService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.utilisateurService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    
                    'Access-Control-Allow-Origin': '*',
                    /*'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'GET, HEAD,PUT, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':'Access-Control-Allow-Headers,access-control-allow-methods, Access-Control-Allow-Methods, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
                    'Content-Type': 'application/json',*/
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
            
        }
        console.log(request);
        return next.handle(request);
    }
    
}