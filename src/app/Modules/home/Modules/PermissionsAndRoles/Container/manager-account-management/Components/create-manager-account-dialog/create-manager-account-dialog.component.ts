import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Custom_DIALOG_REF, CustomDialogRef } from 'src/app/Custom/Dialog/dialog-ref';

@Component({
  selector: 'app-create-manager-account-dialog',
  templateUrl: './create-manager-account-dialog.component.html',
  styleUrls: ['./create-manager-account-dialog.component.scss']
})
export class CreateManagerAccountDialogComponent implements OnInit {
  form = new FormGroup({});
  isSubmited: boolean = false;
  roles : any[] = [];
  roleName : string;

  constructor(@Inject(Custom_DIALOG_REF) private dialog_ref: CustomDialogRef) {}

  ngOnInit(): void {}


  addRole(){
    console.log("this is role");
    console.log(this.roleName);
    this.roles.push(this.roleName);
    this.roleName = "";
  }

  onCancel() {
    this.dialog_ref.close({
      canceled: true,
    });
  }

  onSave() {
    if (!this.form.invalid) {
      this.dialog_ref.close({
        ...this.form.value,
        canceled: false,
      });
      this.isSubmited = false;
    } else {
      this.isSubmited = true;
    }
  }
}
