import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMangerFormsManagementComponent } from './volunteer-manger-forms-management.component';

describe('VolunteerMangerFormsManagementComponent', () => {
  let component: VolunteerMangerFormsManagementComponent;
  let fixture: ComponentFixture<VolunteerMangerFormsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMangerFormsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerMangerFormsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
