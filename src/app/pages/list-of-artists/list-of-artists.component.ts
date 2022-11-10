import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artists';
import { ArtistsService } from '../../services/artists.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-of-artists',
  templateUrl: './list-of-artists.component.html',
  styleUrls: ['./list-of-artists.component.scss']
})

export class ListOfArtistsComponent implements OnInit {
  isAdmin: boolean;
  role:any;
  artists: Artist[] = [];
  token:null;
  isLoggedIn: boolean;
  

  constructor(public router: Router,
    public artistService: ArtistsService) { }

  ngOnInit() {
    this.artistService.getArtists().subscribe((data: Artist[])=>{
      console.log(data);
      this.artists = data;
      this.isAuthenticated();
      this.isAuthorized();
    })
  }

  isAuthenticated()
  {
    var listdata= JSON.parse(localStorage.getItem("dataKey") || '{}');
    const valueToken = listdata.token;
    this.token=valueToken;

    if (this.token == null || this.token == '' || this.token =="undefined"){
      return this.isLoggedIn = false; 
    }
    else{
      return this.isLoggedIn = true;
    }
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
