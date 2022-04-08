import { NgModule } from '@angular/core';
import { TLDialog } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TLDialogContainer } from './dialog';

@NgModule({
    imports: [OverlayModule, PortalModule],
    exports: [],
    declarations: [TLDialogContainer],
    providers: [TLDialog],
    entryComponents: [TLDialogContainer],
})
export class TreelancersDialogModule {}
