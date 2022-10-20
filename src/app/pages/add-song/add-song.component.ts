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

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  songsForm: FormGroup;

  ngOnInit() {
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
    public songsService: SongsService
  ) { }

  submitSong() {
    this.songsService.saveSongs(this.songsForm.value).subscribe(res => {
      console.log('Song has been added!')
      this.router.navigateByUrl('/index')
    })
  }

}  
