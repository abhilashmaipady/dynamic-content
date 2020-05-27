import { Component, Input, ViewChild } from '@angular/core';
import { QBase } from '../q-base/qBase';
import { IgxComboComponent } from 'igniteui-angular';
import { QQuestionnaireComponent } from '../q-questionnaire/q-questionnaire.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'q-multi',
    templateUrl: './q-multi.component.html',
    styleUrls: [`./q-multi.component.scss`],
    providers: [{ provide: QBase, useExisting: QMultiComponent }]
})
export class QMultiComponent extends QBase {
    
    constructor(public questionnaire: QQuestionnaireComponent) {
      super();
    }

    private _value = null;

    @ViewChild(IgxComboComponent, { read: IgxComboComponent })
    public combo: IgxComboComponent;

    public get value(): any {
        return this._value ? this._value.length ? this._value : null : null;
    }
    public set value(newVal: any) {
        this._value = newVal;
    }
}
