import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginCredentils } from '../Models/LoginCredentials.Model';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from '../Models/Compte.Model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.apiUrl}`;

  constructor(private _http: HttpClient,private router : Router) { }

  login(clientDetail : LoginCredentils) : Observable<any>
  {
      let url = this.baseUrl + "/authenticate";
      return this._http.post(url, clientDetail,{observe: 'response'});
  }
  Logout()
  {
    // Remove the token from the localStorage.
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.localStorage.clear();

    //this.router.navigate(['login']);
  }
  isLoggedIn() {

    // create an instance of JwtHelper class.
    let jwtHelper = new JwtHelperService();

    // get the token from the localStorage as we have to work on this token.
    let token = localStorage.getItem('token');

    // check whether if token have something or it is null.
    if(!token)
    {
      return false;
    }

    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.
    if(token)
    {
     // let expirationDate = jwtHelper.getTokenExpirationDate(token);

      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.

      let isExpired = jwtHelper.isTokenExpired(token);

      return !isExpired;
    }
  }
  getAdminDetail() : Observable<Client>
  {
      let url = this.baseUrl + "Client/" + localStorage.getItem("id");

       // create an instance of Header object.
      let headers = new HttpHeaders();

      // get token from localStorage.
      let token = localStorage.getItem('token');

      // Append Authorization header.
      headers.append('Authorization' , 'Bearer ' + token);

      return this._http.get<Client>(url , { headers : headers });
  }
}
