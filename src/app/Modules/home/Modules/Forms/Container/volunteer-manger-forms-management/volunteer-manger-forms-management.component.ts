import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-manger-forms-management',
  templateUrl: './volunteer-manger-forms-management.component.html',
  styleUrls: ['./volunteer-manger-forms-management.component.scss']
})
export class VolunteerMangerFormsManagementComponent implements OnInit {

  formsCount : any[] = [1,2,3,4,5,6,7,1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    console.log("this is hello");
  }
}
