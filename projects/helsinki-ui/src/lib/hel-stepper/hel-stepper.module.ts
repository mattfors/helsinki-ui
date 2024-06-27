import { NgModule } from '@angular/core';
import {
  HelStepActionsDirective,
  HelStepComponent,
  HelStepHeadlineDirective,
  HelStepLabelDirective
} from './hel-step.component';
import { HelStepperComponent } from './hel-stepper.component';
import { HelStepperNextDirective } from './hel-stepper-button.directive';


@NgModule({
  declarations: [],
  imports: [
    HelStepComponent,
    HelStepHeadlineDirective,
    HelStepLabelDirective,
    HelStepperComponent,
    HelStepperNextDirective,
    HelStepActionsDirective
  ],
  exports: [
    HelStepComponent,
    HelStepHeadlineDirective,
    HelStepLabelDirective,
    HelStepperComponent,
    HelStepperNextDirective,
    HelStepActionsDirective
  ]
})
export class HelStepperModule { }
