import { Component, OnInit } from '@angular/core';
import { Songs } from '../../interfaces/songs';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  id: any;
  
  song: Songs = {
    artistName: "",
    title: "",
    album: "", 
    lyrics: ""
  }

  constructor(private route: ActivatedRoute, public songsService: SongsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //getsong by id
    this.songsService.getSong(this.id).subscribe((s) => {
      this.song = s;
    })
  }

}