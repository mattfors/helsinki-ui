import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HelActionsComponent } from './hel-actions.component';
import { HelColumnComponent } from './hel-column.component';



@NgModule({
  declarations: [],
  imports: [
    LayoutComponent,
    HelActionsComponent,
    HelColumnComponent
  ],
  exports: [
    LayoutComponent,
    HelActionsComponent,
    HelColumnComponent
  ]
})
export class HelLayoutModule { }
