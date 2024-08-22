import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../../services/auth-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isUserLoggedIn: boolean = false;

  constructor(private authServ : AuthServService) {
    this.isUserLoggedIn = authServ.isUserLogged;
  }

  ngOnInit():void {

  }
}
