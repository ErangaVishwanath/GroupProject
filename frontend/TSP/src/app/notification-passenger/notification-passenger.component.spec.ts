import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPassengerComponent } from './notification-passenger.component';

describe('NotificationPassengerComponent', () => {
  let component: NotificationPassengerComponent;
  let fixture: ComponentFixture<NotificationPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
