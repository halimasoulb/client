import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    
} from '@angular/common/http';
import { map, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private router : Router) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
   

      return next.handle(request).pipe(map(event => {
          return event;
      }), catchError(err  => {
          if (err.status === 401) {
         // alert("unAuthorized");
          this.router.navigate(['/login']);
          const error = err.error.message || err.statusText;
          
         return throwError(error);}
      }),
          finalize(() => {
            
          })
      )
  }
  }


