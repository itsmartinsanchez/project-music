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
  isAdmin: boolean;
  role:any;
  public formattedLyrics: string;
  
  song: Songs = {
    artistId: 0,
    title: "",
    album: "", 
    lyrics: "",
    artistName: ""
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

      this.formattedLyrics=this.song.lyrics.replace(/\n/g,"<br>");

      this.isAuthorized();
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
//check user if can edit and delete
  isAuthorized(){
      var listdata= JSON.parse(localStorage.getItem("dataKey") || '{}');
      const valueRole= listdata.role;
      this.role=valueRole;
      if (this.role == "admin"){
        return this.isAdmin = true; 
      }
      else{
        return this.isAdmin = false;
      }
    }

}