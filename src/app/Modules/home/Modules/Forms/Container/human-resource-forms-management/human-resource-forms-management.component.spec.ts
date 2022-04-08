import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceFormsManagementComponent } from './human-resource-forms-management.component';

describe('HumanResourceFormsManagementComponent', () => {
  let component: HumanResourceFormsManagementComponent;
  let fixture: ComponentFixture<HumanResourceFormsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourceFormsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceFormsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
