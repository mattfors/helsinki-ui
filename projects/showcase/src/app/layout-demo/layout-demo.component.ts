import { Component } from '@angular/core';
import { HelLayoutModule } from '../../../../helsinki-ui/src';
import { HelStepperModule } from '../../../../helsinki-ui/src/lib/hel-stepper/hel-stepper.module';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-demo',
  standalone: true,
  imports: [
    HelLayoutModule,
    HelStepperModule,
    RouterOutlet
  ],
  templateUrl: './layout-demo.component.html',
  styleUrl: './layout-demo.component.scss'
})
export class LayoutDemoComponent {

}
