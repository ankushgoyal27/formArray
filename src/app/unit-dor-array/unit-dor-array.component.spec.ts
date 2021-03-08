import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDorArrayComponent } from './unit-dor-array.component';

describe('UnitDorArrayComponent', () => {
  let component: UnitDorArrayComponent;
  let fixture: ComponentFixture<UnitDorArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDorArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDorArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
