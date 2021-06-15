import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityDetailedViewComponent } from './humidity-detailed-view.component';

describe('HumidityDetailedViewComponent', () => {
  let component: HumidityDetailedViewComponent;
  let fixture: ComponentFixture<HumidityDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
