
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { HumanResourceFormsManagementComponent } from './human-resource-forms-management.component';
import { CreateFormDialogComponent } from './Components/create-form-dialog/create-form-dialog.component';

@NgModule({
    declarations: [HumanResourceFormsManagementComponent, CreateFormDialogComponent],
    imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
        DragDropModule,
        OverlayModule,
        TranslateModule.forChild({
            extend: true,
        }),
    ],
})
export class HumanResourceFormsManagementViewModule {}
