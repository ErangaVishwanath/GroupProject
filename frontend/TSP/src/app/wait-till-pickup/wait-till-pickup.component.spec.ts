import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitTillPickupComponent } from './wait-till-pickup.component';

describe('WaitTillPickupComponent', () => {
  let component: WaitTillPickupComponent;
  let fixture: ComponentFixture<WaitTillPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitTillPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitTillPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
