import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConfigurationViewComponent } from './api-configuration-view.component';

describe('ApiConfigurationViewComponent', () => {
  let component: ApiConfigurationViewComponent;
  let fixture: ComponentFixture<ApiConfigurationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConfigurationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConfigurationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
