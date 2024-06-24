import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { HelStepperNextDirective } from './hel-stepper-button.directive';
import { HelStepComponent } from './hel-step.component';


@Component({
  selector: 'hel-stepper',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    HelStepperNextDirective,
    HelStepComponent
  ],
  templateUrl: './hel-stepper.component.html',
  styleUrl: './hel-stepper.component.scss',
  providers: [{provide: CdkStepper, useExisting: HelStepperComponent}],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'hel-stepper-container'
  }
})
export class HelStepperComponent extends CdkStepper {

  @ContentChildren(HelStepComponent, {descendants: true}) override _steps: QueryList<HelStepComponent> =
    undefined as unknown as QueryList<HelStepComponent>;

  override readonly steps: QueryList<HelStepComponent> = new QueryList<HelStepComponent>();

}





