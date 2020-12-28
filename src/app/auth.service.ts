import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private currentUser=JSON.parse(localStorage.getItem('user') as any) ||null
  constructor(private http: HttpClient,private router:Router) { 
 
  }

  get currentUserValue(){
    return this.currentUser
  }

  checkAuth(){
    return this.http.get<any>('http://localhost:3000/users/auth',{withCredentials:true})
      
     
  }

  logout(){
    this.http.post<any>('http://localhost:3000/users/logout',this.currentUser,{withCredentials:true}).subscribe((data:any)=>{
      console.log(data)
    })
  }
  login(email:any,password:any){
      return this.http.post<any>('http://localhost:3000/users/login',{email,password})
        .subscribe((data:any)=>{
          console.log(data)
          localStorage.setItem('user',JSON.stringify(data))
        })
  }

  signUp(email:any,password:any,username:any){

    return this.http.post<any>('http://localhost:3000/users/signup',{email,password,username},{withCredentials:true})
    .subscribe((data:any)=>{
      console.log(data)
      if (data.success){
      localStorage.setItem('user',JSON.stringify(data.user))
        this.router.navigate(['/cards'])
      }
    })
  }
}
