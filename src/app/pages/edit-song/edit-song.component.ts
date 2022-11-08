import { Component, 
  OnInit
 } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import { Songs } from '../../interfaces/songs'
import { Artist } from '../../interfaces/artists';
import { SongsService } from 'src/app/services/songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
    songsForm: FormGroup;
    id: any;
    song: Songs;
    hide: boolean = true;

    songs: Songs [] = [];

    artists: Artist [] = [];

  constructor(
    public fb: FormBuilder,
    private router: Router, //for redirecting page
    public songsService: SongsService,
    public artistsService: ArtistsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
// checking user if can edit
//PUT VALIDATION HERE

//get song
this.id = this.route.snapshot.paramMap.get('id');
this.songsService.getSong(this.id).subscribe((s) => {
  this.song = s;
});

//get artists
this.artistsService.getArtists().subscribe((data: Artist[])=>{
  console.log(data);
  this.artists = data;
})


    this.songsForm = this.fb.group({
      id: new FormControl(),
      artistId: new FormControl(),
      title: new FormControl(),
      lyrics: new FormControl(),
      album: new FormControl()
    });

    this.songsForm.patchValue({
      songId: this.id
    })


  }

  

  editSong() {
    this.songsService.saveSongs(this.songsForm.value).subscribe(res => {
      console.log('Song has been edited for songID:' + this.id);
      this.router.navigateByUrl('/content/' + this.id);
  })
}

}
