import { NgModule } from '@angular/core';
import { CustomDialog } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CustomDialogContainer } from './dialog';

@NgModule({
    imports: [OverlayModule, PortalModule],
    exports: [],
    declarations: [CustomDialogContainer],
    providers: [CustomDialog],
    entryComponents: [CustomDialogContainer],
})
export class CustomDialogModule {}
