import { Component, ContentChild, HostListener, ElementRef, TemplateRef } from '@angular/core';
import { QBase } from '../q-base/qBase';
import { QErrorIconDirective } from '../directives/qErrorIcon.directive';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-validator`,
    templateUrl: `./q-validator.component.html`,
    styleUrls: [`./q-validator.component.scss`]
})
export class QValidatorComponent {
    private _errorIcon = null;
    constructor(public control: QBase, public elementRef: ElementRef) {}

    public get errorIcon(): QErrorIconDirective {
        return this._errorIcon;
    }

    @ContentChild(QErrorIconDirective, { read: QErrorIconDirective })
    public set errorIcon(val: QErrorIconDirective) {
        this._errorIcon = val;
    }
}
