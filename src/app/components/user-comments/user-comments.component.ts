import { Component, OnInit } from '@angular/core';
import {Comments} from '../../interfaces/comments';
import { Users } from '../../interfaces/users';
import {Songs} from '../../interfaces/songs';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';
import { UsersService } from '../../services/users.service';
import { CommentsService } from '../../services/comments.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
  id: any;
  userId: any;
  username: any;
  songId: any;
  
  comment: Comments[] = [];
  user: Users[] = [];

  //comments: Comments[] = [];

  constructor(
    private route: ActivatedRoute,
    public songsService: SongsService,
    private usersService: UsersService,
    public commentsService: CommentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.commentsService.getCommentsBySongId(this.id).subscribe((c: Comments[]) => {
      console.log(c);
      this.comment = c;
    })
    //this.getUsername();


  }

  getUsername()
  {
        //this.commentsService.getUsernameByUserId
        this.songId = this.route.snapshot.paramMap.get('id');
        this.commentsService.getCommentsBySongId(this.songId).subscribe((com: Comments[]) =>{
        console.log(com);
        })

        // this.commentsService.getUsernameByUserId(this.userId).subscribe((u) => {
        //   console.log("user details:" + u);
        // })

  }


  //show delete button if currentUserId = userId comment

}
