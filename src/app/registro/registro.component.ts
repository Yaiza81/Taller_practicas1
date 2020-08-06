import { Component, OnInit } from '@angular/core';
import {UserApiService} from "src/app/services/user-api.service"
import { UserInterface } from '../models/userInterface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private UserApiService: UserApiService) { }
     user: UserInterface = {
      name: "",
      username: "",
      password: ""
    };


  ngOnInit(): void {
  }

  onRegister(): void{
    this.UserApiService.registerUser(this.user.name, this.user.username, this.user.password)
    .subscribe(user => {
      console.log(user);
      this.UserApiService.setUser(user);
      let token = user.name;
      this.UserApiService.setToken(token);
    });
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarLogin(){
    window.location.href = "http://localhost:4200/login";
  }
}
