import { Component, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
    template: '<ng-template cdkPortalOutlet></ng-template>',
    styleUrls: ['./dialog.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'tl-dialog-container',
        '[style.min-width]': 'width',
        '[style.min-height]': 'height',
    },
})
export class TLDialogContainer {
    @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet;

    @Input() width: string | number = 0;
    @Input() height: string | number = 0;

    constructor() {}

    public attachComponentPortal(componentPortal: ComponentPortal<any>) {
        this.portalOutlet.attachComponentPortal(componentPortal);
    }

    public close() {}
}
