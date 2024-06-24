import { Component, ContentChildren, QueryList } from '@angular/core';
import { HelColumnComponent } from './hel-column.component';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { HelActionsComponent } from './hel-actions.component';

@Component({
  selector: 'hel-layout',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  host: {
    'class': 'hel-layout',
  }
})
export class LayoutComponent {

  @ContentChildren(HelColumnComponent, {descendants: true}) _allColumns!: QueryList<HelColumnComponent>;

  @ContentChildren(HelActionsComponent, {descendants: true}) _allActions!: QueryList<HelActionsComponent>;

}
