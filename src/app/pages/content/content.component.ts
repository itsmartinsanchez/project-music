import { Component, OnInit } from '@angular/core';
import { Songs } from '../../interfaces/songs';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  songs: Songs[] = [];

  constructor(public songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getSongs().subscribe((data: Songs[])=>{
      console.log(data);
      this.songs = data;
    })
  }

}