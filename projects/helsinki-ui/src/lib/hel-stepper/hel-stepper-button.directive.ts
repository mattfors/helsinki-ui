import { Directive } from '@angular/core';
import { CdkStepperNext } from '@angular/cdk/stepper';

@Directive({
  selector: 'hel-action-button[helStepperNext], button[helStepperNext]',
  standalone: true,
})
export class HelStepperNextDirective extends CdkStepperNext {}
