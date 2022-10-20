import { Component, 
  OnInit
 } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { Songs } from '../../interfaces/songs'
import { Artist } from '../../interfaces/artists';
import { SongsService } from 'src/app/services/songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
    songsForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router, //for redirecting page
    public songsService: SongsService
  ) { }

  ngOnInit(): void {
  }

  editSong() {
    this.songsService.editSongs(this.songsForm.value).subscribe(res => {
      console.log('Song has been edited!')
      this.router.navigateByUrl('/index')
  })
}

}
