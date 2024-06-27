import { Component, ContentChildren, Directive, QueryList, TemplateRef } from '@angular/core';
import { HelColumnComponent } from '../layout/hel-column.component';
import { MatList, MatListItem } from '@angular/material/list';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';


@Directive({
  selector: '[helListColumnItem]',
  standalone: true,
})
export class HelListColumnItemDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'hel-list-column',
  standalone: true,
  imports: [
    MatList,
    MatSlideToggle,
    NgIf,
    MatDivider,
    CdkDropList,
    NgForOf,
    MatAccordion,
    MatExpansionPanel,
    NgTemplateOutlet,
    CdkDrag,
    CdkDropListGroup,
    MatListItem,
    MatIcon,
    MatMiniFabButton,
    MatIconButton,
    MatCard,
    MatCardContent
  ],
  templateUrl: './hel-list-column.component.html',
  styleUrl: './hel-list-column.component.scss'
})
export class HelListColumnComponent {

  _items: HelListColumnItemDirective[] = [];
  _itemsHidden: HelListColumnItemDirective[] = [];
  isCollapsed = true;

  @ContentChildren(HelListColumnItemDirective)
  set contentChildren(children: QueryList<HelListColumnItemDirective>) {
    this._items = children.toArray();
  }

  onDrop(event: CdkDragDrop<HelListColumnItemDirective[]>) {
    if (event.previousContainer === event.container) {
      this.moveListItem(event);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  moveListItem(event: { previousIndex: number; currentIndex: number }): void {
    moveItemInArray(this._items, event.previousIndex, event.currentIndex);
  }



}
