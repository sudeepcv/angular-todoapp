import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'sudeep'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username=='sudeep' && this.password=='sudeep'){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin=true
    }
  }

}
