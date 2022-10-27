import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalgraphComponent } from './historicalgraph.component';

describe('HistoricalgraphComponent', () => {
  let component: HistoricalgraphComponent;
  let fixture: ComponentFixture<HistoricalgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalgraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
