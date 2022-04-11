import { Component, OnInit } from '@angular/core';
import { CustomDialog } from 'src/app/Custom/Dialog/dialog.service';
import { CreateRoleComponent } from './Components/create-role/create-role.component';

@Component({
  selector: 'app-roles-view',
  templateUrl: './roles-view.component.html',
  styleUrls: ['./roles-view.component.scss'],
})
export class RolesViewComponent implements OnInit {
  constructor(private customDialog: CustomDialog) {}

  ngOnInit(): void {}

  createRole() {
    this.customDialog
      .open<{}, {}>(CreateRoleComponent, {}, {})
      .result.pipe()
      .subscribe((result) => {
        console.log('this is result');
        console.log(result);
      });
  }
}
