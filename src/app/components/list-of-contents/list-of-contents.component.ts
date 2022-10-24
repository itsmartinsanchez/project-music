import { Component, OnInit } from '@angular/core';
import { Songs } from '../../interfaces/songs';
import { SongsService } from '../../services/songs.service';
import {Router} from "@angular/router";

//declare var $:any;
@Component({
  selector: 'app-list-of-contents',
  templateUrl: './list-of-contents.component.html',
  styleUrls: ['./list-of-contents.component.scss']
})
export class ListOfContentsComponent implements OnInit {

  songs: Songs[] = [];

  constructor(public router: Router,
    public songsService: SongsService) { }

  ngOnInit() {
      this.songsService.getSongs().subscribe((data: Songs[])=>{
      console.log(data);
      this.songs = data;
    })
  }

  contentClick(songs: Songs){
    //this.songsService.listScrollPos = $("#MainView").scrollTop();
    this.router.navigate(['/content', songs.id]);
  } 

}
