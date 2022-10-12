import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';

@Component({
  selector: 'app-list-hotel-details',
  templateUrl: './list-hotel-details.component.html',
  styleUrls: ['./list-hotel-details.component.css']
})
export class ListHotelDetailsComponent implements OnInit {
    hotelList:any;
  constructor(private router:Router,private service:HotelserviceService) { }

  ngOnInit() :void {
    this.getHotelDetails()
  }
  goto(url:any){
    this.router.navigateByUrl(url)
  }
  getHotelDetails(){
    this.service.getHotelDetailsInfo().subscribe((response)=>{
      console.log("Hotel Detail List"+JSON.stringify(response));
      this.hotelList=response;
      
    })
  }

}
