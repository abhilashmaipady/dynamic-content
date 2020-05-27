import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: `[qErrorIcon]`
})
export class QErrorIconDirective {
    @HostBinding('class.error__icon')
    public errorClass = 'error__icon';
}
