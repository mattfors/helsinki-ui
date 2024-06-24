import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hel-layout-column',
  standalone: true,
  templateUrl: './hel-column.component.html'
})
export class HelColumnComponent {


  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;

  constructor() {
  }
}
