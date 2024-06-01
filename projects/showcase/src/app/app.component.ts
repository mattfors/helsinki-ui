import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelMenuComponent, HelsinkiUiComponent } from '../../../helsinki-ui/src';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelsinkiUiComponent, HelMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
