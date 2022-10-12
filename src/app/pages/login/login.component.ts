import { HttpClient } from '@angular/common/http';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HotelserviceService } from 'src/app/service/hotelservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private service:HotelserviceService,private http:HttpClient) { 
    
  }

  ngOnInit(): void {

     this.createForm();
    
    


     
  }
  createForm(){
    this.loginForm = this.fb.group({
      "id":new FormControl(null,[Validators.required]),
      "username": new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z].*')]),
      "password":new FormControl(null,[Validators.required]),
      
    })
  }




  get Id(){
    return this.loginForm.get('id')
  }
  get name(){
    return this.loginForm.get('username')
  }
  get pass(){
    return this.loginForm.get('password')
  }

  // onSubmit(data:any){
  //  console.log("data from Ts"+JSON.stringify(data));
  //   this.service.getDataLogin(data.id).subscribe((response:any)=>{
  //     console.log('Response from Login Api' +JSON.stringify(response));
  //   })
    
  // }

  //login api
 
  login(data:any){
    console.log(' login data : '+ JSON.stringify( data));
    this.service.login(data.id).subscribe((response:any)=>{
      console.log('login api response ' + JSON.stringify(response));
      if(response.username == data.username &&  response.password == data.password){
       alert('login successful');
        localStorage.setItem('userInfo', JSON.stringify(response));
        this.router.navigateByUrl('home');
      } else {
        alert('username or password invalid');
      }
    })
  }
}





