import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { HelStepperNextDirective } from './hel-stepper-button.directive';
import { HelStepComponent } from './hel-step.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'hel-stepper',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    HelStepperNextDirective,
    HelStepComponent,
    MatCardModule,
    MatIconModule,
    MatButton
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

  getIcon(step: HelStepComponent): string {
    if (this.selected === step) {
      return 'radio_button_checked';
    } else if (step.completed) {
      return 'check';
    }
    return 'radio_button_unchecked';
  }

}





