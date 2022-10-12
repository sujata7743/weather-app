import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelDetailsComponent } from './list-hotel-details.component';

describe('ListHotelDetailsComponent', () => {
  let component: ListHotelDetailsComponent;
  let fixture: ComponentFixture<ListHotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHotelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
