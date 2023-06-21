import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRidersComponent } from './help-riders.component';

describe('HelpRidersComponent', () => {
  let component: HelpRidersComponent;
  let fixture: ComponentFixture<HelpRidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpRidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
