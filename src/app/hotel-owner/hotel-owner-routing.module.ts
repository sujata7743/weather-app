import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelDetailsComponent } from './add-hotel-details/add-hotel-details.component';
import { AddHotelOwnerComponent } from './add-hotel-owner/add-hotel-owner.component';
import { ListHotelDetailsComponent } from './list-hotel-details/list-hotel-details.component';
import { ListHotelOwnerComponent } from './list-hotel-owner/list-hotel-owner.component';

const routes: Routes = [
  {path:'addhotel',component:AddHotelOwnerComponent},
  {path:'listhotel',component:ListHotelOwnerComponent},
  {path:'addhoteldetails',component:AddHotelDetailsComponent},
   {path:'listhoteldetails',component:ListHotelDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelOwnerRoutingModule { }
