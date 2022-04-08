import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { TLDialogContainer } from './dialog';
import { TLDialogRef, TL_DIALOG_DATA, TL_DIALOG_REF } from './dialog-ref';
import { take } from 'rxjs/operators';

var NEXT_UNIQUE_ID = 0;

@Injectable()
export class TLDialog {
    constructor(private overlay: Overlay, private injector: Injector) {}

    open<Result, Data>(component: any, option: OverlayConfig, data: Data): TLDialogRef<Result> {
        let overlayRef = this.overlay.create({
            ...option,
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'tl-dialog-backdrop',
            width: '100%',
            height: '100%',
            panelClass: 'tl-dialog-panel',
        });
        overlayRef
            .backdropClick()
            .pipe(take(1))
            .subscribe(() => overlayRef.dispose());
        const containerPortal = new ComponentPortal(TLDialogContainer);
        const containerRef = overlayRef.attach(containerPortal);
        const dialogRef = new TLDialogRef<Result>(overlayRef, containerRef.instance, NEXT_UNIQUE_ID++);
        let injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: TL_DIALOG_DATA, useValue: data },
                { provide: TL_DIALOG_REF, useValue: dialogRef },
            ],
        });
        let componentPortal = new ComponentPortal(component, null, injector);
        containerRef.instance.attachComponentPortal(componentPortal);
        return dialogRef;
    }
}
