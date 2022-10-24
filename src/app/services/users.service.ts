import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = 'https://localhost:7090/users';
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  loginUser(user: Users): Observable<Users>{
    console.log("Logging in..");
    const url = `${this.apiUrl}/login`;
    return this.http.post<Users>(url, user, this.httpOptions);
  }

  saveUser(user: Users) {
    const url = `${this.apiUrl}/register`;
    return this.http.post<Users>(url, user, this.httpOptions);
  }

  logoutUser(username: any) {
    console.log("Preparing to logout user " + username )
    const url = `${this.apiUrl}/${username}/logout`;
    return this.http.put<Users>(url, username, this.httpOptions);
  }

  getUserDetails(username: string) {
    console.log("Connecting to api... " + username)
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<Users>(url);
  }

}
