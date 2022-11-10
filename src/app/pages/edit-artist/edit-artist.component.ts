import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistsService } from 'src/app/services/artists.service';
import { Artist } from '../../interfaces/artists';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.scss']
})
export class EditArtistComponent implements OnInit {
  selected: "";
  id: any;
  artistsForm: FormGroup;
  artists: Artist [] = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public artistsService: ArtistsService
  ) { }

  ngOnInit() {
  //get artists
  this.artistsService.getArtists().subscribe((data: Artist[])=>{
    console.log(data);
    this.artists = data;
  })
    this.artistsForm = this.fb.group({
      id: [''],
      name: ['']
    })
  }

  submitArtist(){
    console.log(this.artistsForm.value);
    this.artistsService.saveArtist(this.artistsForm.value).subscribe(res =>{
      console.log('Artist has been edited!');
      this.router.navigateByUrl('/list-of-artists')
    })

  }
    //delete function here
    deleteArtist(id:number)
    {
      console.log("Deleting.." + id);
      this.artistsService.deleteArtist(id).subscribe((msg) =>{
      console.log(msg);
      this.router.navigateByUrl('/list-of-artists')
      });
    }

}

