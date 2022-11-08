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
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artistsForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.artistsForm = this.fb.group({
      name: ['']
    })
  }

  submitArtist(){
    console.log(this.artistsForm.value);
    this.artistsService.saveArtist(this.artistsForm.value).subscribe(res =>{
      console.log('Artist has been added!');
      this.router.navigateByUrl('/list-of-artists')
    })

  }

}
