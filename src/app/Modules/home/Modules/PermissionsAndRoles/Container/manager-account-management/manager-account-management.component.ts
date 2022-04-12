import { Component, OnInit } from '@angular/core';
import { CustomDialog } from 'src/app/Custom/Dialog/dialog.service';
import { CreateManagerAccountDialogComponent } from './Components/create-manager-account-dialog/create-manager-account-dialog.component';

@Component({
  selector: 'app-manager-account-management',
  templateUrl: './manager-account-management.component.html',
  styleUrls: ['./manager-account-management.component.scss']
})
export class ManagerAccountManagementComponent implements OnInit {

  formsCount : any[] = [1,2,3,4,5,6,7,1,2,3,4,5];

  constructor(private customDialog: CustomDialog) { }

  ngOnInit(): void {
  }

  createManagerAccount() {
    this.customDialog
      .open<{}, {}>(CreateManagerAccountDialogComponent, {}, {})
      .result.pipe()
      .subscribe((result) => {
        console.log('this is result');
        console.log(result);
      });
  }

}
