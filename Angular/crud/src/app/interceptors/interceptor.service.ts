import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public auth:AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
  const headers = new HttpHeaders({
    "Access-Control-Allow-Origin" : '*',
    
    

    Authorization: `Bearer ${this.auth.getToken()}`
  })

   const reqClone = req.clone({
     headers
   })

   return next.handle(reqClone)
  
}

}
