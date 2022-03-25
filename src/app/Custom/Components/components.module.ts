import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MentionModule } from 'angular-mentions';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        PickerModule,
        OverlayModule,
        //OwlDateTimeModule,
        //OwlNativeDateTimeModule,
        MentionModule,
    ],
    declarations: [],
    exports: [],
})
export class ComponentsModule {}
