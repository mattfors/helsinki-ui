import { Component, Input } from '@angular/core';
import { HelStepDef } from '../hel-route-stepper/hel-route-stepper.component';
import { HelStepComponent, HelStepHeadlineDirective, HelStepLabelDirective } from '../hel-stepper/hel-step.component';
import { HelStepperComponent } from '../hel-stepper/hel-stepper.component';
import { HelStepperNextDirective } from '../hel-stepper/hel-stepper-button.directive';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hel-hel-stepper-panel',
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
  templateUrl: './hel-stepper-panel.component.html',
  styleUrl: './hel-stepper-panel.component.scss'
})
export class HelStepperPanelComponent {

  @Input()
  steps: HelStepDef[] = [];

  @Input()
  record: Record<string, any> = {};

  renderTemplate(template: string, data: Record<string, any>): string {
    return template.replace(/%\w+%/g, match => {
      const key = match.slice(1, -1);
      return data[key] !== undefined ? String(data[key]) : match;
    });
  }

  stepperComplete() {

  }

}
