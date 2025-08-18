import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeclaracaoComponent } from './card-declaracao.component';

describe('CardDeclaracaoComponent', () => {
  let component: CardDeclaracaoComponent;
  let fixture: ComponentFixture<CardDeclaracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeclaracaoComponent]
    });
    fixture = TestBed.createComponent(CardDeclaracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
