import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { CustomDialogContainer } from './dialog';

export class CustomDialogRef<Result = any> {
    private _result = new Subject<Result>();

    constructor(private overlayRef: OverlayRef, private container: CustomDialogContainer, private id: number) {}

    public close(result?: Result) {
        this._result.next(result);
        this._result.complete();
        this.overlayRef.dispose();
    }

    public dismiss() {
        this._result.complete();
        this.overlayRef.dispose();
    }

    public next(result?: Result) {
        this._result.next(result);
    }

    public get result(): Observable<Result> {
        return this._result.asObservable();
    }
}

export const Custom_DIALOG_DATA = 'custom.dialog.data';
export const Custom_DIALOG_REF = 'custom.dialog.ref';
