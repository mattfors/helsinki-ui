import { NgModule } from '@angular/core';
import { HelStepComponent, HelStepHeadlineDirective, HelStepLabelDirective } from './hel-step.component';
import { HelStepperComponent } from './hel-stepper.component';
import { HelStepperNextDirective } from './hel-stepper-button.directive';


@NgModule({
  declarations: [],
  imports: [
    HelStepComponent,
    HelStepHeadlineDirective,
    HelStepLabelDirective,
    HelStepperComponent,
    HelStepperNextDirective
  ],
  exports: [
    HelStepComponent,
    HelStepHeadlineDirective,
    HelStepLabelDirective,
    HelStepperComponent,
    HelStepperNextDirective
  ]
})
export class HelStepperModule { }
