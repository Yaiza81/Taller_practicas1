import { Component, OnInit } from '@angular/core';
import {UserApiService} from "src/app/services/user-api.service"
import { UserInterface } from '../models/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserApiService: UserApiService) { }
   user: UserInterface = {
    username: "",
    password: "",
   };

  ngOnInit(): void {
  }

  onLogin(){
    return this.UserApiService.loginUser(this.user.username,this.user.password)
    .subscribe(data => {
      console.log(data);
    },
      error => console.log(error)
    );
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarRegistro(){
    window.location.href = "http://localhost:4200/registro";
  }
}
