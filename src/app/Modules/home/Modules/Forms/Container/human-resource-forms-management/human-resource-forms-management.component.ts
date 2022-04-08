import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resource-forms-management',
  templateUrl: './human-resource-forms-management.component.html',
  styleUrls: ['./human-resource-forms-management.component.scss']
})
export class HumanResourceFormsManagementComponent implements OnInit {

  formsRequestNumber: number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
