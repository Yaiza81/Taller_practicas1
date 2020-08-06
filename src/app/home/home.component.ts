import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarLogin(){
    window.location.href = "http://localhost:4200/login";
  }

  enviarRegistro(){
    window.location.href = "http://localhost:4200/registro";
  }
}
