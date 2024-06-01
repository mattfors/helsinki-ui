import { ChangeDetectionStrategy, Component, ContentChild, Directive, ViewEncapsulation } from '@angular/core';
import { CdkStep, CdkStepLabel } from '@angular/cdk/stepper';

@Directive({
  selector: '[helStepLabel]',
  standalone: true,
})
export class HelStepLabelDirective extends CdkStepLabel {}

@Directive({
  selector: '[helStepHeadline]',
  standalone: true,
})
export class HelStepHeadlineDirective extends CdkStepLabel{}

@Component({
  selector: 'hel-step',
  templateUrl: 'hel-step.component.html',
  providers: [
    {provide: CdkStep, useExisting: HelStepComponent},
  ],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'matStep',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HelStepComponent extends CdkStep {

  @ContentChild(HelStepLabelDirective) override stepLabel: HelStepLabelDirective = undefined!;

  @ContentChild(HelStepHeadlineDirective)  stepContent: HelStepHeadlineDirective = undefined!;
}
