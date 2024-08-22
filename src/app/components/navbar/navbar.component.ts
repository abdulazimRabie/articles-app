import { Component } from '@angular/core';
import { AuthServService } from '../../services/auth-serv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenue = true;
  isUserLoggedIn = false;

  constructor(private authServ : AuthServService) {
    this.isUserLoggedIn = authServ.isUserLogged;
  }

  toggleShowMenue() {
    this.showMenue = !this.showMenue;
    console.log(this.showMenue);
  }

  OnInit() {
    this.authServ.getloggedStatus().subscribe(status=>{
      this.isUserLoggedIn=status;
    });
  }
}
