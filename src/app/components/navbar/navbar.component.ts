import { Component } from '@angular/core';
import { AuthServService } from '../../services/auth-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenue = true;
  isUserLoggedIn = false;

  constructor(private authServ : AuthServService, private router: Router) {
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

  openProfile() {
    const authorString = localStorage.getItem("author");
    if (authorString) {
      const author = JSON.parse(authorString); // Parse the stored string back into an object
      const authorId = author.id; // Access 
      this.router.navigate(["profile", authorId])
    }
  }
}
