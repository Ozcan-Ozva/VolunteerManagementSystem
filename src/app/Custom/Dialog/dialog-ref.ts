import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { TLDialogContainer } from './dialog';

export class TLDialogRef<Result = any> {
    private _result = new Subject<Result>();

    constructor(private overlayRef: OverlayRef, private container: TLDialogContainer, private id: number) {}

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

export const TL_DIALOG_DATA = 'tl.dialog.data';
export const TL_DIALOG_REF = 'tl.dialog.ref';
