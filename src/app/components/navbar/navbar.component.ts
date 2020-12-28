import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

    username:string=""
    isLoggedIn:boolean=false
    faCart=faShoppingCart
    value:string="2"
  constructor(private router:Router,private authService:AuthService) {
       
   }

  ngOnInit(): void {
        this.authService.checkAuth().subscribe((data:any)=>{
          if (data.success){
            this.username=data.user.username
            this.isLoggedIn=true
          }
        })

  }

    logout(){
      this.authService.logout()
      this.isLoggedIn=false
    }
  // redirect(){
  //   this.router.navigate(['/cards'])
  // }

  redirect(){
    this.router.navigate(['/login'])
  }

}
