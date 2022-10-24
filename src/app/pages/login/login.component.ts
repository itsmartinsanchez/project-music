import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../interfaces/users';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    formMessage: string = "";
    status: string ="";

    @Input() user: Users = {
      username: "",
      password: "",
      passwordConfirmation: "",
      role: "",
      token: ""
    }

  constructor(
    public fb: FormBuilder,
    private router: Router, //for redirecting page
    private usersService: UsersService
  ) { }


  ngOnInit(): void {
  }
// login handling
  login(): void {
    try{
      let o = {...this.user};

      this.user.username = o.username;
      this.user.password = o.password;

      this.usersService.loginUser(this.user)
                      .subscribe((res) => {
                        this.successLogin();
                      },(err:HttpErrorResponse)=>
                      {
                          this.validateErrorResponse();
                      });
    }catch
    {
      console.log("Invalid credentials" )
    }
    
  }


  successLogin(): void{

    //validate role
    this.usersService.getUserDetails(this.user.username).subscribe((user) => {
      
      if(user.role=="user")
      {
        this.user.role="user";
      } else {
        this.user.role="admin";
      }

        this.user.token = user.token;
        this.saveToStorage();

        //redirect to index page
        this.router.navigateByUrl('/index').then(() => {
        window.location.reload();
    });

    });
    
  }

  validateErrorResponse(): void
  {
      this.formMessage = "Invalid credentials. Please try again";      
      this.status="fail";
  }
  
  //saving the role, token, and username inside the local storage
  public saveToStorage(){
    const valueUsername = this.user.username
    const valueRole = this.user.role
    const valueToken = this.user.token

    var getData = 
    {
        "username":valueUsername,
        "role":valueRole,
        "token": valueToken
    }

    localStorage.setItem('dataKey', JSON.stringify(getData));



  }


}
