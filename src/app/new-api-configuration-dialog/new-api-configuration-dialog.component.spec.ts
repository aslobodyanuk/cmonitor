import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApiConfigurationDialogComponent } from './new-api-configuration-dialog.component';

describe('NewApiConfigurationDialogComponent', () => {
  let component: NewApiConfigurationDialogComponent;
  let fixture: ComponentFixture<NewApiConfigurationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApiConfigurationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApiConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
