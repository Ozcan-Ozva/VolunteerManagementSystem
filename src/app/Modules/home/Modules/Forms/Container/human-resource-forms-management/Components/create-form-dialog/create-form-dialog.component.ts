import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomDialogRef, Custom_DIALOG_REF } from 'src/app/Custom/Dialog/dialog-ref';

@Component({
  selector: 'app-create-form-dialog',
  templateUrl: './create-form-dialog.component.html',
  styleUrls: ['./create-form-dialog.component.scss']
})
export class CreateFormDialogComponent implements OnInit {

  form = new FormGroup({});
  isSubmited : boolean = false;
  leftInputsColumn : any[] = [
    {
      'name': 'الدراسة',
      'controlName': 'study'
    },
    {
      'name': 'العمل',
      'controlName': 'study'
    },
    {
      'name': 'السكن',
      'controlName': 'study'
    },
    {
      'name': 'اعمال تطوعية سابقة',
      'controlName': 'study'
    },
    {
      'name': 'شهادات وخبرات سابقة',
      'controlName': 'study'
    },
    {
      'name': 'الايام المناسبة للمشاركة',
      'controlName': 'study'
    },
    {
      'name': 'ملاحظات إضافية',
      'controlName': 'study'
    },
  ];
  rightInputsColumn : any[] = [
    {
      'name': 'الاسم',
      'controlName': 'study'
    },
    {
      'name': 'العمر',
      'controlName': 'study'
    },
    {
      'name': 'الجنس',
      'controlName': 'study'
    },
    {
      'name': 'الجنسية',
      'controlName': 'study'
    },
    {
      'name': 'رقم الجوال',
      'controlName': 'study'
    },
    {
      'name': 'عدد ساعات التطوع الاسبوعية',
      'controlName': 'study'
    },
    {
      'name': 'مجالات الفعاليات التي يفضل المشاركة فيها',
      'controlName': 'study'
    },
  ];

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
