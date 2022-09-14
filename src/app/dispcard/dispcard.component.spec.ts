import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispcardComponent } from './dispcard.component';

describe('DispcardComponent', () => {
  let component: DispcardComponent;
  let fixture: ComponentFixture<DispcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispcardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DispcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
