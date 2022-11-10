import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { Songs } from '../../interfaces/songs'
import { Artist } from '../../interfaces/artists';
import { SongsService } from 'src/app/services/songs.service';
import { Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  selected = "";
  artists: Artist [] = [];
  songsForm: FormGroup;
  song: Songs;
  formMessage: string = "";

  ngOnInit() {

  //get artists
  this.artistsService.getArtists().subscribe((data: Artist[])=>{
  console.log(data);
  this.artists = data;
})
    this.songsForm = this.fb.group({
      artistId: [''],
      title: [''],
      lyrics: [''],
      album: ['']
    })


  }

  constructor(
    public fb: FormBuilder,
    private router: Router, //for redirecting page
    public songsService: SongsService,
    public artistsService: ArtistsService
  ) { }

  submitSong() {
    this.validateForm();
    this.songsService.saveSongs(this.songsForm.value).subscribe(res => {
      console.log('Song has been added!')
      this.router.navigateByUrl('/index')
    })
  }

  validateForm(){
    let s = this.songsForm.value;
    if (this.songsForm.untouched || s.artistId == "" || s.title == "" || s.lyrics == "")
    {
      this.formMessage = "Incomplete song details!"
    }
  }

}  
