import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { httpInterceptorProviders } from '../httpinterceptor';
import { provideMockStore } from '@ngrx/store/testing';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,MaterialModule],
      declarations: [DashboardComponent],
      providers: [provideMockStore({})],
   
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
