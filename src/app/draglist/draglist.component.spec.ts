import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraglistComponent } from './draglist.component';

describe('DraglistComponent', () => {
  let component: DraglistComponent;
  let fixture: ComponentFixture<DraglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
