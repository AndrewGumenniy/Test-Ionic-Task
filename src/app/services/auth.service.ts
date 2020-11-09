import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private password: any;
  private baseUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) { }

  public register(model) {
    this.password = model.matchingPasswords.password;
    return this.http.post(this.baseUrl + 'register', model);
  }

  public getPassword() {
    return this.password ? window.btoa(this.password) : null;
  }
}
