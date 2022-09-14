import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorbtcComponent } from './calculatorbtc.component';

describe('CalculatorbtcComponent', () => {
  let component: CalculatorbtcComponent;
  let fixture: ComponentFixture<CalculatorbtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorbtcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
