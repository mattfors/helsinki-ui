import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hel-layout-actions',
  standalone: true,
  templateUrl: './hel-actions.component.html'
})
export class HelActionsComponent {

  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;

}
