import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';

@Component({
  selector: 'app-add-hotel-details',
  templateUrl: './add-hotel-details.component.html',
  styleUrls: ['./add-hotel-details.component.css']
})
export class AddHotelDetailsComponent implements OnInit {
   hotelDetails!:FormGroup
  constructor(private router:Router,private service:HotelserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
    
  }
  createForm(){
    this.hotelDetails=this.fb.group({
      "hotelName":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "location":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "city":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "service":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "singleRoom":"",
      "singleRoomCharge": "",
      "doubleRoom": "",
      "doubleRoomCharge": "",
      "rating":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "hotelOwner":new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
       "id":new FormControl(null,[Validators.required]),
    })
   
  }

  goto(url:any){
    this.router.navigateByUrl(url)
  }
  get name(){
    return this.hotelDetails.get('hotelName')
  }

  addDetails(formData:any){
    console.log("Value Form Data" +JSON.stringify(formData));
    this.service.getHotelDetails(formData).subscribe((response)=>{
     console.log("Data From Api" +JSON.stringify(response));
     
    })
    
  }

}
