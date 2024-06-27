import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HelStepActionsDirective,
  HelStepComponent,
  HelStepHeadlineDirective,
  HelStepLabelDirective
} from '../hel-stepper/hel-step.component';
import { HelStepperComponent } from '../hel-stepper/hel-stepper.component';
import { HelStepperNextDirective } from '../hel-stepper/hel-stepper-button.directive';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelActionButtonComponent } from '../hel-action-button/hel-action-button.component';

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
  selector: 'hel-route-stepper',
  standalone: true,
  imports: [CommonModule, HelStepComponent, HelStepHeadlineDirective, HelStepLabelDirective, HelStepperComponent, HelStepperNextDirective, RouterLink, HelActionButtonComponent, HelStepActionsDirective],
  templateUrl: './hel-route-stepper.component.html',
  styleUrl: './hel-route-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelRouteStepperComponent {

  stepperDef: HelStepperDef;
  record: Record<string, any>;
  stepperCompleteCallback: (record: Record<string, any>) => void;

  constructor(private route: ActivatedRoute) {
    this.stepperDef = route.snapshot.data['stepperDef'];
    this.record = route.snapshot.data['record'];
    this.stepperCompleteCallback = route.snapshot.data['stepperCompleteCallback'];
  }

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
