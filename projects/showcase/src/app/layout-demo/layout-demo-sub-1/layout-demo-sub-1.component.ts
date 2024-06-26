import { Component } from '@angular/core';
import {
  HelActionButtonComponent,
  HelLayoutModule,
  HelListColumnComponent, HelListColumnItemDirective,
  HelStepperModule
} from '../../../../../helsinki-ui/src';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-demo-sub-1',
  standalone: true,
  imports: [HelLayoutModule, HelStepperModule, HelActionButtonComponent, HelListColumnComponent, HelListColumnItemDirective],
  templateUrl: './layout-demo-sub-1.component.html',
  styleUrl: './layout-demo-sub-1.component.scss'
})
export class LayoutDemoSub1Component {

}
