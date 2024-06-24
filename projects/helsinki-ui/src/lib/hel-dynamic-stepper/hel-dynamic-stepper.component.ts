import { Component, Input } from '@angular/core';
import { HelStepComponent, HelStepHeadlineDirective, HelStepLabelDirective } from '../hel-stepper/hel-step.component';
import { HelStepperComponent } from '../hel-stepper/hel-stepper.component';
import { HelStepperNextDirective } from '../hel-stepper/hel-stepper-button.directive';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface HelStepDef {
  label: string;
  headline: string;
  content?: string;
  next: string;
}

export interface HelStepperDef {
  steps: HelStepDef[];
}

@Component({
  selector: 'hel-hel-dynamic-stepper',
  standalone: true,
  imports: [
    HelStepComponent,
    HelStepHeadlineDirective,
    HelStepLabelDirective,
    HelStepperComponent,
    HelStepperNextDirective,
    NgForOf,
    RouterLink
  ],
  templateUrl: './hel-dynamic-stepper.component.html',
  styleUrl: './hel-dynamic-stepper.component.scss'
})
export class HelDynamicStepperComponent {

  @Input()
  steps: HelStepDef[] = [];

  @Input()
  record: Record<string, any> = {};

  @Input()
  stepperCompleteCallback: (record: Record<string, any>) => void = () => {};

  renderTemplate(template: string, data: Record<string, any>): string {
    return template.replace(/%\w+%/g, match => {
      const key = match.slice(1, -1);
      return data[key] !== undefined ? String(data[key]) : match;
    });
  }

  stepperComplete() {
    if (this.stepperCompleteCallback) {
      this.stepperCompleteCallback(this.record);
    }
  }
}
