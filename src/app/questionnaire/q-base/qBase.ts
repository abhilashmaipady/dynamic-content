import { Input } from '@angular/core';
import { Question } from '../../interfaces/interfaces';
import { QQuestionnaireComponent } from '../q-questionnaire/q-questionnaire.component';
 
export abstract class QBase {
    public questionnaire: QQuestionnaireComponent;
    /**
     * The object of type `Question` that is rendered using the control
     */
    @Input()
    public question: Question;

    /**
     * The value of the question
     */
    public value: any = null;

    /**
     * Gets the validity of the question
     */
    public get valid(): boolean {
        return this.value !== null;
    }
}
