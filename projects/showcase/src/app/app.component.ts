import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelsinkiUiComponent } from '../../../helsinki-ui/src';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelsinkiUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
