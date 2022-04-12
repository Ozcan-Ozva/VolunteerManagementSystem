import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAccountManagementComponent } from './manager-account-management.component';

describe('ManagerAccountManagementComponent', () => {
  let component: ManagerAccountManagementComponent;
  let fixture: ComponentFixture<ManagerAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAccountManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
