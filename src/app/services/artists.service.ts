import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Songs } from '../interfaces/songs';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Artist } from '../interfaces/artists';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private apiUrl = 'https://localhost:7090/artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    console.log("Fetching artists...");
    return this.http.get<Artist[]>(this.apiUrl);
  }

  saveArtist(artists: Artist): Observable<Artist>{
    const url = `${this.apiUrl}`

    if(!artists.id){
      console.log("Adding artist...");
      return this.http.post<Artist>(url, artists, httpOptions);
    }
    else{
      console.log("Updating artist name..");
      return this.http.put<Artist>(url, artists, httpOptions);
    }
  }


}
