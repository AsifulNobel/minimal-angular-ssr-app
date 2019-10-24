import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberDisplayComponent } from './random-number-display.component';

describe('RandomNumberDisplayComponent', () => {
  let component: RandomNumberDisplayComponent;
  let fixture: ComponentFixture<RandomNumberDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumberDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
