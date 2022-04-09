import { Component, OnInit } from '@angular/core';
import { CustomDialog } from 'src/app/Custom/Dialog/dialog.service';
import { CreateFormDialogComponent } from './Components/create-form-dialog/create-form-dialog.component';

@Component({
  selector: 'app-human-resource-forms-management',
  templateUrl: './human-resource-forms-management.component.html',
  styleUrls: ['./human-resource-forms-management.component.scss']
})
export class HumanResourceFormsManagementComponent implements OnInit {

  formsRequestNumber: number[] = [1,2,3,4,5];

  constructor(private customDialog : CustomDialog) { }

  ngOnInit(): void {
  }

  createForm(){
    this.customDialog
    .open<{},{}>(CreateFormDialogComponent,{},{})
    .result.pipe()
    .subscribe((result) => {
      console.log("this is result");
      console.log(result);
    })
  }

}
