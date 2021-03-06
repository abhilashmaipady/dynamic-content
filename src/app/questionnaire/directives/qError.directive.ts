import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: `[qError]`
})
export class QErrorDirective {
    @HostBinding('class.error__text')
    public errorClass = 'error__text';
}
