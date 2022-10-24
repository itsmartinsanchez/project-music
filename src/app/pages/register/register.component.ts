import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  status:any;
  formMessage: string = "";
  src: string = "";
  header: string = "Failed!";
  
  @Input() user: Users = {
    username: "",
    password: "",
    passwordConfirmation: "",
    role: "",
    token: ""
  }

  @Input() userList: Users[] =[];

  constructor(
    public fb: FormBuilder,
    private router: Router, //for redirecting page
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  register(){
    let o = {...this.user};

    if(o.password!=o.passwordConfirmation)
    {
      console.log("Password does not match");
      this.formMessage = "The password confirmation does not match";
    }
    else if(o.username.trim() == "" || o.password.trim()   == "" || o.username.trim()  == "")
    {
      console.log("Incomplete details");
      this.formMessage = "Please complete the registration details";
    }
    else if(o.role == "" || o.role == null)
    {
      console.log("Please choose a role");
      this.formMessage = "Please choose your account role";
    }
    else{
      console.log("Saving user..");
      this.proceedToRegisterAccount(o);
    }
  }

  proceedToRegisterAccount(o: Users): void {
    this.usersService.saveUser(o).subscribe(res => {
      this.user.username = "",
      this.user.password = "",
      this.user.passwordConfirmation = "",
      this.user.role = ""
      this.status = "success";

      this.pushData(o);
      
    },(err:HttpErrorResponse)=>
    {
      console.log("Account already exists");
      this.status = "fail";
      this.formMessage = "This user already exists";
    });
  }

    pushData(o:Users):void{
      let maxId = -1;
      let updated = false;
  
      for(let i =0; i< this.userList.length; i++)
      {
        let tempid = this.userList[i].id
  
        if(tempid && tempid> maxId){
          maxId = tempid
        }
        if(tempid && tempid == o.id){
          this.userList[i] = o;
          updated = true;
        }
      }
      if(!updated) {
        o.id = maxId + 1;
        this.userList.push(o);
      }  
  
      console.log("saving..." + this.user)
        this.formMessage = "Congratulations! Your account has been successfully created.";
        //this.router.navigateByUrl('/index');
    }
}
