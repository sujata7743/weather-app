import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelOwnerRoutingModule } from './hotel-owner-routing.module';
import { AddHotelOwnerComponent } from './add-hotel-owner/add-hotel-owner.component';
import { ListHotelOwnerComponent } from './list-hotel-owner/list-hotel-owner.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ListHotelDetailsComponent } from './list-hotel-details/list-hotel-details.component';
import { AddHotelDetailsComponent } from './add-hotel-details/add-hotel-details.component';


@NgModule({
  declarations: [
    AddHotelOwnerComponent,
    ListHotelOwnerComponent,
    ListHotelDetailsComponent,
    AddHotelDetailsComponent
  ],
  imports: [
    CommonModule,
    HotelOwnerRoutingModule,
    ReactiveFormsModule
  ]
})
export class HotelOwnerModule { }
