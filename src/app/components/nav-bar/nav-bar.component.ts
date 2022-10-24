import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  username:any;
  role:any;
  token:null;
  isLoggedIn: boolean;

  @Input() user: Users = {
    username: "",
    password: "",
    passwordConfirmation: "",
    role: "",
    token: ""
  }

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
        // local user data 
        var listdata= JSON.parse(localStorage.getItem("dataKey") || '{}');
        const valueRole = listdata.role;
        this.role=valueRole;
        this.username = listdata.username;
        console.log(listdata);
        this.isAuthenticated();

        }

  logout() {
    localStorage.removeItem('dataKey');

    this.usersService.logoutUser(this.username).subscribe( s => {
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    });
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
}
