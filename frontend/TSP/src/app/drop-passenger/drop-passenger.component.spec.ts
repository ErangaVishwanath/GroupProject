import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPassengerComponent } from './drop-passenger.component';

describe('DropPassengerComponent', () => {
  let component: DropPassengerComponent;
  let fixture: ComponentFixture<DropPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
