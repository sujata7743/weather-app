import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';

@Component({
  selector: 'app-add-hotel-owner',
  templateUrl: './add-hotel-owner.component.html',
  styleUrls: ['./add-hotel-owner.component.css']
})
export class AddHotelOwnerComponent implements OnInit {
  userForm!:FormGroup;
  constructor( private fb :FormBuilder,private service:HotelserviceService,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.userForm=this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required],
      'role':['',Validators.required],
    })

    }
    goto(url:any){
      this.router.navigateByUrl(url)
    }
    addUser(formData:any){
     console.log("data from user api" +JSON.stringify(formData));
     
     let reqBody={
      "username": formData.username,
      "password": formData.password,
      "role": formData.role
    
    }
    this.service.addUserInfo(reqBody).subscribe((response)=>{
      console.log("Add User Info" +JSON.stringify(response));
      
    })
      
    }
  }


