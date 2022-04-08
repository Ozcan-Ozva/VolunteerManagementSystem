import { OverlayModule } from '@angular/cdk/overlay';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { TranslateService } from '@ngx-translate/core';
import { NgxTimerModule } from 'ngx-timer';
import { ComponentsModule } from 'src/app/Custom/Components/components.module';
import { HomeComponent } from 'src/app/Modules/home/home.component';
import { HomeRouting } from 'src/app/Modules/home/home.routing';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
    imports: [
        ComponentsModule,
        HomeRouting,
        CommonModule,
        PickerModule,
        ReactiveFormsModule,
        FormsModule,
        OverlayModule,
        NgxTimerModule,
        CdkScrollableModule,
    ],
    declarations: [HomeComponent, NavBarComponent],
})
export class HomeModule {
    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('en');
    }
}
