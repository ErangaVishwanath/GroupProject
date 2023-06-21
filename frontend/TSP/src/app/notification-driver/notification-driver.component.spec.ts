import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDriverComponent } from './notification-driver.component';

describe('NotificationDriverComponent', () => {
  let component: NotificationDriverComponent;
  let fixture: ComponentFixture<NotificationDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
