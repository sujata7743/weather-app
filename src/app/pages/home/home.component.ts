import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: any;
  userDetails: any;
  

  constructor(private service:HotelserviceService,private router:Router) { }

  ngOnInit(): void {

    let userData:any = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(userData);
    this.getUserInfo();
 
  }
  goto(url:any){
    this.router.navigateByUrl(url)
  }
 
  getUserInfo(){
    this.service.userInfo(this.userInfo.id).subscribe((response:any)=>{
      console.log('user details '  + JSON.stringify(response));
      this.userDetails = response;
      
    })
  }
}


