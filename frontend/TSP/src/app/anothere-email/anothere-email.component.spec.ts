import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothereEmailComponent } from './anothere-email.component';

describe('AnothereEmailComponent', () => {
  let component: AnothereEmailComponent;
  let fixture: ComponentFixture<AnothereEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnothereEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnothereEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
