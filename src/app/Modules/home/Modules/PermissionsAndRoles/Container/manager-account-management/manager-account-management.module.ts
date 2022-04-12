
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ManagerAccountManagementComponent } from './manager-account-management.component';
import { CreateManagerAccountDialogComponent } from './Components/create-manager-account-dialog/create-manager-account-dialog.component';

@NgModule({
    declarations: [ManagerAccountManagementComponent, CreateManagerAccountDialogComponent],
    imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        DragDropModule,
        OverlayModule,
        TranslateModule.forChild({
            extend: true,
        }),
    ],
})
export class ManagerAccountManagementViewModule {}
