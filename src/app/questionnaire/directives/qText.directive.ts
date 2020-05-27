import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: `[qText]`
})
export class QTextDirective {
    @HostBinding('class.question__text')
    public textClass = 'question__text';
}
