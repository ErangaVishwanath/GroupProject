import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPropertyComponent } from './lost-property.component';

describe('LostPropertyComponent', () => {
  let component: LostPropertyComponent;
  let fixture: ComponentFixture<LostPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
