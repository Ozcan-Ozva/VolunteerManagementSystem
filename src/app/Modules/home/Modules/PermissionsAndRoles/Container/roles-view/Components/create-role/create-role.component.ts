import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Custom_DIALOG_REF, CustomDialogRef } from 'src/app/Custom/Dialog/dialog-ref';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  form = new FormGroup({});
  isSubmited : boolean = false;

  constructor(@Inject(Custom_DIALOG_REF) private dialog_ref: CustomDialogRef,) { }

  ngOnInit(): void {
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
