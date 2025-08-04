import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainContentComponent } from './card-main-content.component';

describe('CardMainContentComponent', () => {
  let component: CardMainContentComponent;
  let fixture: ComponentFixture<CardMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMainContentComponent]
    });
    fixture = TestBed.createComponent(CardMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
