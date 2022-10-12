import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {
  
  constructor(private http:HttpClient) { }

  login(id:any)
  {
    return this.http.get(' http://localhost:3000/login/'+id);
  }
  userInfo(id:any)
  {
    return this.http.get('http://localhost:3000/userInfo/'+id)
  }
  addUserInfo(body:any)
  {
    return this.http.post(' http://localhost:3000/login/',body)
  }
  getHotelUser(){
    return this.http.get('http://localhost:3000/login/');
  }
  getHotelDetails(body:any){
    return this.http.post( 'http://localhost:3000/HotelDetails/',body)
  }
  getHotelDetailsInfo(){
    return this.http.get('http://localhost:3000/HotelDetails/')
  }
}
