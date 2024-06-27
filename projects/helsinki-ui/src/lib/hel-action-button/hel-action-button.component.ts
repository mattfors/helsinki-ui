import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hel-action-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hel-action-button.component.html',
  styleUrl: './hel-action-button.component.scss'
})
export class HelActionButtonComponent {

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();

}
