import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportMediaComponent } from './trasport-media.component';

describe('TrasportMediaComponent', () => {
  let component: TrasportMediaComponent;
  let fixture: ComponentFixture<TrasportMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasportMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasportMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
