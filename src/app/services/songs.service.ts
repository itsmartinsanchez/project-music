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
  private apiUrl = 'https://localhost:7090/songs';

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
    if(!songs.id){

    console.log("Adding song...");
    return this.http.post<Songs>(this.apiUrl, songs, httpOptions);

    } else {

      //update
      console.log("Editing song...");
      const url = `${this.apiUrl}/${songs.id}`;
      return this.http.put<Songs>(url, songs, httpOptions);
    }
  }

  deleteSongs(id: number): Observable<string> {
    console.log("Deleting song..")
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete<string>(url);
  }

  editSongs(songs: Songs): Observable<Songs> {
    console.log("Editing song...");
    return this.http.put<Songs>(this.apiUrl, JSON.stringify(songs), httpOptions);
  }

  getSong(id: any): Observable<Songs> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Songs>(url);
  }
}
