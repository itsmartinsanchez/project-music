import { Component, OnInit } from '@angular/core';
import {Comments} from '../../interfaces/comments';
import { Users } from '../../interfaces/users';
import {Songs} from '../../interfaces/songs';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';
import { CommentsService } from '../../services/comments.service';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  rating = 0;
  id:any;
  songId: number;
  userId: any;
  commentForm: FormGroup;

  constructor(public fb: FormBuilder, private route: ActivatedRoute,
    public songsService: SongsService,
    public commentsService: CommentsService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("Song id is: " + this.id);
    this.getCurrentUserId();

    this.commentForm = this.fb.group({
      userId: [''],
      songId: [null],
      rating: [''],
      content: ['']

    })
    
    this.commentForm.patchValue({
      songId: this.id
    })
  }

  getCurrentUserId(){
    var listdata= JSON.parse(localStorage.getItem("dataKey") || '{}');
    const username = listdata.username;
    this.usersService.getUserDetails(username).subscribe((user) => {
      console.log("User Id: " + user.id);
     this.commentForm.patchValue({
      userId: user.id
     }) 
    });
  }

  submitComment(){

    console.log(this.commentForm.value);
    this.commentsService.saveComment(this.commentForm.value).subscribe(res =>{
      console.log('Comment has been added!')
      window.location.reload();
    })
  }

}
