import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any){
    this.authService.signUp(data.email,data.password,data.username)
  }

}
