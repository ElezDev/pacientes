import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarDComponent } from './dashboard.component';

describe('DashboarDComponent', () => {
  let component: DashboarDComponent;
  let fixture: ComponentFixture<DashboarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
