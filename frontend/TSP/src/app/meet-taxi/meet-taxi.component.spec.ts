import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTaxiComponent } from './meet-taxi.component';

describe('MeetTaxiComponent', () => {
  let component: MeetTaxiComponent;
  let fixture: ComponentFixture<MeetTaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTaxiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
