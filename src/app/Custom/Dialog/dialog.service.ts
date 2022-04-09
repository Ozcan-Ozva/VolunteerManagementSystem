import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomDialogContainer } from './dialog';
import { CustomDialogRef, Custom_DIALOG_DATA, Custom_DIALOG_REF } from './dialog-ref';
import { take } from 'rxjs/operators';

var NEXT_UNIQUE_ID = 0;

@Injectable()
export class CustomDialog {
    constructor(private overlay: Overlay, private injector: Injector) {}

    open<Result, Data>(component: any, option: OverlayConfig, data: Data): CustomDialogRef<Result> {
        let overlayRef = this.overlay.create({
            ...option,
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'custom-dialog-backdrop',
            width: '100%',
            height: '100%',
            panelClass: 'custom-dialog-panel',
        });
        overlayRef
            .backdropClick()
            .pipe(take(1))
            .subscribe(() => overlayRef.dispose());
        const containerPortal = new ComponentPortal(CustomDialogContainer);
        const containerRef = overlayRef.attach(containerPortal);
        const dialogRef = new CustomDialogRef<Result>(overlayRef, containerRef.instance, NEXT_UNIQUE_ID++);
        let injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: Custom_DIALOG_DATA, useValue: data },
                { provide: Custom_DIALOG_REF, useValue: dialogRef },
            ],
        });
        let componentPortal = new ComponentPortal(component, null, injector);
        containerRef.instance.attachComponentPortal(componentPortal);
        return dialogRef;
    }
}
