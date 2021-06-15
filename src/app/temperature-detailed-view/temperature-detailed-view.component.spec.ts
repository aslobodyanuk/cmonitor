import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDetailedViewComponent } from './temperature-detailed-view.component';

describe('TemperatureDetailedViewComponent', () => {
  let component: TemperatureDetailedViewComponent;
  let fixture: ComponentFixture<TemperatureDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
