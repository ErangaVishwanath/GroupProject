import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerProfileDefaultComponent } from './passenger-profile-default.component';

describe('PassengerProfileDefaultComponent', () => {
  let component: PassengerProfileDefaultComponent;
  let fixture: ComponentFixture<PassengerProfileDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerProfileDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerProfileDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
