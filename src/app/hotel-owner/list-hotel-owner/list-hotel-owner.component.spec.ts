import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelOwnerComponent } from './list-hotel-owner.component';

describe('ListHotelOwnerComponent', () => {
  let component: ListHotelOwnerComponent;
  let fixture: ComponentFixture<ListHotelOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHotelOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHotelOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
