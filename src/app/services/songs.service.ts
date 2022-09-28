import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Songs } from '../interfaces/songs';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private apiUrl = 'http://localhost:5001/songs';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Songs[]> {
    console.log("Fetching songs...");
    return this.http.get<Songs[]>(this.apiUrl);
  }

  saveSongs(songs: Songs): Observable<Songs> {
    console.log("Adding song...");
    return this.http.post<Songs>(this.apiUrl, JSON.stringify(songs), httpOptions);
  }

  deleteSongs(songs: Songs): Observable<Songs> {
    const url = `${this.apiUrl}/${songs.id}`;
    return this.http.delete<Songs>(url);
  }

  getSong(id: any): Observable<Songs> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Songs>(url);
  }
}
