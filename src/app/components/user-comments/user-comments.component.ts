import { Component, OnInit } from '@angular/core';
import {Comments} from '../../interfaces/comments';
import { Users } from '../../interfaces/users';
import {Songs} from '../../interfaces/songs';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';
import { CommentsService } from '../../services/comments.service';
@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
  id: any;
  userId: any;
  
  comment: Comments[] = [];
  user: Users[] = [];

  //comments: Comments[] = [];

  constructor(
    private route: ActivatedRoute,
    public songsService: SongsService,
    public commentsService: CommentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.commentsService.getCommentsBySongId(this.id).subscribe((c: Comments[]) => {
      console.log(c);
      this.comment = c;
    })

  }

  //show delete button if currentUserId = userId comment

}
