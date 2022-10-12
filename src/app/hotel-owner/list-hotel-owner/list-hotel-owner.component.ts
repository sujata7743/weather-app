import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';

@Component({
  selector: 'app-list-hotel-owner',
  templateUrl: './list-hotel-owner.component.html',
  styleUrls: ['./list-hotel-owner.component.css']
})
export class ListHotelOwnerComponent implements OnInit {
  hotelUserList: any;

  constructor(private service:HotelserviceService ,private router:Router) { }
 

  ngOnInit(): void {
    this.getUserDetails();
  }
  goto(url:any){
    this.router.navigateByUrl(url)
  }
  getUserDetails(){
    this.service.getHotelUser().subscribe((response:any)=>{
      console.log('user list ' + JSON.stringify(response));

      this.hotelUserList = response;
      
    })

}
}
