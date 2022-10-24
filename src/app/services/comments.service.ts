import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Comments } from '../interfaces/comments';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from '../interfaces/users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'https://localhost:7090';

  constructor(private http: HttpClient) { }

  getCommentsBySongId(songId: any): Observable<Comments[]>{
    console.log("Showing comments for song: " + songId);
    const url = `${this.apiUrl}/songs/comments?songId=${songId}`;
    return this.http.get<Comments[]>(url);
  }

  getUsernameByUserId(userId: any): Observable<Users[]>{
    const url = `"${this.apiUrl}/comments/username?userId="${userId}`
    return this.http.get<Users[]>(url);
  }

  saveComment(comments: Comments): Observable<Comments>{

    const url = `${this.apiUrl}/comments`

    if(!comments.id){
      console.log("Adding comment...");
      return this.http.post<Comments>(url, comments, httpOptions)
    } else {
      //update

      console.log("Editing comment...");
      //url for edit comment
      return this.http.put<Comments>(url, comments, httpOptions);
    }
  }
}
