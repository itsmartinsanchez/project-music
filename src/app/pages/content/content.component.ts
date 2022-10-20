import { Component, OnInit } from '@angular/core';
import { Songs } from '../../interfaces/songs';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  id: any;
  
  song: Songs = {
    artistId: 0,
    title: "",
    album: "", 
    lyrics: ""
  }

  constructor(
     private route: ActivatedRoute,
     public songsService: SongsService,
     private router: Router
     ){ }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //getsong by id
    this.songsService.getSong(this.id).subscribe((s) => {
      this.song = s;
    })
  }

  //delete function here
  deleteSong(id:number)
  {
    console.log("Deleting.." + id);
    this.songsService.deleteSongs(id).subscribe((msg) =>{
    console.log(msg);
    this.router.navigateByUrl('/index')
    });

  }

}