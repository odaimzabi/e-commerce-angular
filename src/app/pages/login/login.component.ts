import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {

 username:string=""
  password:string=""

  constructor(private readonly authService:AuthService) {
    
   }

  ngOnInit(): void {
  }

  onClickSubmit(data:any){
      this.authService.login(data.email,data.password)
  }

  getUsername(e:any){
    console.log(e.target.value)
  }

}
