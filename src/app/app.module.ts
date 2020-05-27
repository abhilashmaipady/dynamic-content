import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyComponent } from './survey/survey.component';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

import { QuestionService } from './survey/questions.service';
import { IgxIconModule } from 'igniteui-angular';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QuestionnaireModule, IgxIconModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, SurveyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuestionService]
})
export class AppModule { }
