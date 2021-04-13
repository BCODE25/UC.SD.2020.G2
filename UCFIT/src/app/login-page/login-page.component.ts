import { Component, OnInit } from '@angular/core';
import { LoginPageServiceService } from './login-page-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginValid: boolean;
  errorMessage: boolean;
  errorMessageText = "";
  username;
  password;

  constructor(private loginService: LoginPageServiceService) { }

  ngOnInit(): void {
    this.loginValid = false;
  }

  authLogin() {
    this.username = (<HTMLInputElement>document.getElementById("login")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log("Hello, " + this.username + " " + this.password + "!");

    this.checkLogin(this.username, this.password);
  }

  checkLogin(un, pw) {
    this.errorMessage = false;
    var ary_usernames = ["blake","andrew","samuel"];
    var ary_passwords = ["blake123","andrew123","samuel123"];

    if (ary_usernames.includes(un) && ary_passwords.includes(pw)) {
      this.loginValid = true
      console.log("Login username = " + un);
      this.loginService.setUsername(un);

      var TESTID = this.loginService.getUserId();
      console.log("Test ID = " + TESTID);
    }
    else if (un === "" || pw === "") {
      this.loginValid = false;
      this.errorMessage = true;
      this.errorMessageText = "Please Input All Required Fields"
    }
    else {
      this.loginValid = false;
      this.errorMessage = true;
      this.errorMessageText = "The Username or Password Did Not Match Our Records"
    }
  }

}
