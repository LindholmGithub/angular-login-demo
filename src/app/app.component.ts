import { Component } from '@angular/core';
import {AuthService} from "./auth/shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-frontend';
  loggedIn: string | null;
  constructor(private _auth : AuthService) {
    this.loggedIn = this._auth.getToken();
  }

  logout() {
    this._auth.logout();
    this.loggedIn = null;
  }
}
