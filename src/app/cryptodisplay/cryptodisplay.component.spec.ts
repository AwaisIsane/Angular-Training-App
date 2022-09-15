import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptodisplayComponent } from './cryptodisplay.component';

describe('CryptodisplayComponent', () => {
  let component: CryptodisplayComponent;
  let fixture: ComponentFixture<CryptodisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptodisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
