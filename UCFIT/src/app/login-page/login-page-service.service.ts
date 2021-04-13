import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageServiceService {

  constructor() { }

  userID = 0;
  userName;

  setUsername(username) {
    console.log("Login Page Service Username = " + username);
    var ary_usernames = ["blake","andrew","samuel"];
    for (var i = 0; i < ary_usernames.length; i++) {
      if (username == ary_usernames[i]) {
        this.userID = i + 1;
        this.userName = username;
      }
    }
  }

  logout() {
    return true;
  }

  getUserId() {
    return this.userID;
  }
  getUserName() {
    return this.userName;
  }
}
