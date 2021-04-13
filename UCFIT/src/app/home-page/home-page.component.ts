import { Component, OnInit } from '@angular/core';
import { LoginPageServiceService } from '../login-page/login-page-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedIn: boolean;

  constructor(private loginService: LoginPageServiceService) { }

  ngOnInit(): void {
    this.loggedIn = true;

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toDateString();
    document.getElementById("daytime").innerHTML = dt.toLocaleTimeString();
  }

  logout() {
    this.loginService.logout();
  }

  toggleLogin() {
    if (this.loggedIn == true) {
      console.log("logging out");
      this.loggedIn = false;
    }
    else if (this.loggedIn == false) {
      console.log("logging in");
      this.loggedIn = true;
    }
  }

}
