import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive, QueryList,
  ViewEncapsulation
} from '@angular/core';
import { CdkStep, CdkStepLabel } from '@angular/cdk/stepper';
import { HelActionButtonComponent } from '../hel-action-button/hel-action-button.component';

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

@Directive({
  selector: '[helStepActions]',
  standalone: true,
})
export class HelStepActionsDirective extends CdkStepLabel{}

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

  @ContentChild(HelStepHeadlineDirective)  stepHeadline: HelStepHeadlineDirective = undefined!;

  @ContentChild(HelStepActionsDirective)  actions: HelStepActionsDirective = undefined!;
}
