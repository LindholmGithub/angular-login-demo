import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LoginUser} from "./login-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {

  }
  login(loginInfo: LoginUser): Promise<string>{
    return this._http.post<string>(environment.api + '/auth', loginInfo)
      .toPromise();
  }
}
