import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTileComponent } from './temperature-tile.component';

describe('TemperatureTileComponent', () => {
  let component: TemperatureTileComponent;
  let fixture: ComponentFixture<TemperatureTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
