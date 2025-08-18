import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSimComponent } from './button-sim.component';

describe('ButtonSimComponent', () => {
  let component: ButtonSimComponent;
  let fixture: ComponentFixture<ButtonSimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSimComponent]
    });
    fixture = TestBed.createComponent(ButtonSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
