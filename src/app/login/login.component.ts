import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarRegistro(){
    window.location.href = "http://localhost:4200/registro";
  }
}
