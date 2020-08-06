import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from "util";

import {UserInterface} from "../models/userInterface";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  registerUser(name: string, username: string, password: string){
    const url_register = "https://taller-practicas.herokuapp.com/register"
    return this.http.post<UserInterface>(url_register,{
      name:name, 
      username: username,
      password: password
    },{headers:this.headers})
    .pipe(map(data =>data));
  }

  loginUser(username:string, password:string): Observable<any>{
    const url_login = "https://taller-practicas.herokuapp.com/login";
    return this.http.post<UserInterface>(url_login,{
      username:username, 
      password:password},
      {headers: this.headers})
      .pipe(map(data => data));
  }

  setUser(user:UserInterface){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser",user_string);
  }

  setToken(token){
    localStorage.setItem("accessToken",token);
  }

  getToken(){
    return localStorage.getItem("accesToken");
  }

  getCurrentUser(): UserInterface{
    let user_string = localStorage.getItem("currentUser");
    if(isNullOrUndefined(user_string)){
      let user: UserInterface= JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

}
