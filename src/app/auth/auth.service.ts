import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';

@Injectable ({providedIn: 'root'})
export class AuthService {
  private authStatusListener = new Subject<boolean>();
 constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    const authdata: AuthData = {email: email, password: password};
    this.http.post('http://localhost:8000/users', authdata)
    .subscribe((response) => {
      console.log(response);
    });
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

}
